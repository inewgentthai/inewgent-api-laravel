<?php

class YoutubeController extends ApiController
{
    public function __construct()
    {
        $this->pathcache = 'api.0.youtube';
    }

    public function index()
    {
        $data = Input::all();

        // Validator request
        $rules = array(
            'user_id' => 'integer|min:1',
        );

        $validator = Validator::make($data, $rules);
        if ($validator->fails()) {
            $response = array(
                'message' => $validator->messages()->first(),
            );

            return API::createResponse($response, 1003);
        }

        // Get cache value
        $keycache = getKeyCache($this->pathcache . '.index', $data);

        // if ($response = getCache($keycache)) {
        //     return API::createResponse($response, 0);
        // }

        $user_id = array_get($data, 'user_id', 0);
        $order = isset($data['order']) ? $data['order'] : 'position';
        $sort = isset($data['sort']) ? $data['sort'] : 'asc';

        // Set Pagination
        $take = (int) (isset($data['perpage'])) ? $data['perpage'] : 20;
        $take = $take == 0 ? 20 : $take;
        $page = (int) (isset($data['page']) && $data['page'] > 0) ? $data['page'] : 1;
        $skip = ($page - 1) * $take;

        $filters = array();
        if ($user_id = array_get($data, 'user_id', false)) {
            $filters['user_id'] = $user_id;
        }

        if ($user_id = array_get($data, 'status', false)) {
            $filters['status'] = $status;
        }

        $parameters = array(
            'filters' => $filters,
            'skip' => $skip,
            'take' => $take,
            'order' => array_get($data, 'order', 'position'),
            'sort' => array_get($data, 'sort', 'desc'),
        );
        
        isset($data['s']) ? $filters['s'] = $data['s'] : '';

        $query = Youtube::filters($filters)
            ->orderBy($order, $sort);

        $count = (int) $query->count();
        $results = $query->skip($skip)->take($take)->get();
        $results = json_decode($results, true);

        if (!$results) {
            $response = array();

            return API::createResponse($response, 1004);
        }

        //Loop data
        $entries = array();
        if (isset($results) && is_array($results)) {
            foreach ($results as $key => $value) {
                $entry = array();
                if (isset($value) && is_array($value)) {
                    // $user_id = array_get($value, 'id', 0);
                    foreach ($value as $key2 => $value2) {
                        if ($key2 == 'categories') {
                            $category['id'] = $value2['id'];
                            $category['title'] = $value2['title'];
                            $entry[$key2] = $category;
                        } else {
                            $entry[$key2] = $value2;
                        }
                    }
                }
                $entries[] = $entry;
            }
        }

        $pagings = array(
            'page' => $page,
            'perpage' => $take,
            'total' => $count,
        );

        $response = array(
            'cached'     => false,
            'pagination' => $pagings,
            'record'     => $entries,
        );

        // // Save cache value
        // saveCache($keycache, $response);

        return API::createResponse($response, 0);
    }

    public function show($id)
    {
        $data = Input::all();
        $data['id'] = $id;

        // Validator request
        $rules = array(
            'id' => 'required|integer|min:1',
        );

        $validator = Validator::make($data, $rules);
        if ($validator->fails()) {
            $response = array(
                'message' => $validator->messages()->first(),
            );

            return API::createResponse($response, 1003);
        }

        // // Get cache value
        // $keycache = getKeyCache($this->pathcache . '.show.' . $id, $data);
        
        // if ($response = getCache($keycache)) {
        //     return API::createResponse($response, 0);
        // }

        $filters = array(
            'id' => $id,
        );
        $query = Youtube::filters($filters)
            ->get();
        $results = json_decode($query, true);

        if (!$results) {
            $response = array();

            return API::createResponse($response, 1004);
        }

        //Loop data
        $entries = array();
        if (isset($results) && is_array($results)) {
            foreach ($results as $key => $value) {
                $entry = array();
                if (isset($value) && is_array($value)) {
                    $user_id = array_get($value, 'id', 0);
                    foreach ($value as $key2 => $value2) {
                        if ($key2 == 'images') {
                            // Loop images
                            $images = loopImages($value2, $user_id);
                            $entry[$key2] = $images;
                        } else if ($key2 == 'categories') {
                            $category['id'] = $value2['id'];
                            $category['title'] = $value2['title'];
                            $entry[$key2] = $category;
                        } else {
                            $entry[$key2] = $value2;
                        }
                    }
                }
                $entries[] = $entry;
            }
        }

        $entries  = $entries[0];
        $response = array(
            'cached' => false,
            'record' => $entries
        );

        // // Save cache value
        // saveCache($keycache, $response);

        return API::createResponse($response, 0);
    }

    public function store()
    {
        $data = Input::all();

        // Validator request
        $rules = array(
            'code' => 'required|min:1',
            'position' => 'integer|max:2',
            'type' => 'integer|min:1',
            'status' => 'integer|min:1|in:0,1',
        );

        $validator = Validator::make($data, $rules);
        if ($validator->fails()) {
            $response = array(
                'message' => $validator->messages()->first(),
            );

            return API::createResponse($response, 1003);
        }

        $parameters = array(
            'code' => (isset($data['code']) ? $data['code'] : ''),
            'name' => (isset($data['name']) ? $data['name'] : ''),
            'artist' => (isset($data['artist']) ? $data['artist'] : ''),
            'url' => (isset($data['url']) ? $data['url'] : ''),
            'description' => (isset($data['description']) ? $data['description'] : ''),
            'user_id' => (isset($data['user_id']) ? $data['user_id'] : ''),
            'position' => (isset($data['position']) ? $data['position'] : date("YmdHis")),
            'type' => (isset($data['type']) ? $data['type'] : '1'),
            'status' => (isset($data['status']) ? $data['status'] : '1'),
            'updated_at' => "0000-00-00 00:00:00",
            'created_at' => date("Y-m-d H:i:s"),
        );

        // [1] Insert
        $query = false;
        if (isset($parameters) && is_array($parameters) && (count($parameters) > 0)) {
            $query = new Youtube();
            foreach ($parameters as $key => $value) {
                $query->$key = $value;
            }
            $query->save();
        }

        if (!isset($query) || !is_object($query)) {
            $response = array();

            return API::createResponse($response, 1001);
        }

        $id = (isset($query->id) ? $query->id : null);

        $response = array(
            'data' => $data,
        );

        // // Clear cache value
        // clearCacheStore($this->pathcache);

        return API::createResponse($response, 0);
    }

    public function update($id = null)
    {
        $data = Input::all();
        $data['id'] = $id;

        // Validator request
        $rules = array(
            'id' => 'required|integer|min:1',
            'code' => 'required',
            'position' => 'integer',
            'type' => 'integer|min:1',
            'status' => 'integer|in:0,1',
        );

        $validator = Validator::make($data, $rules);
        if ($validator->fails()) {
            $response = array(
                'message' => $validator->messages()->first(),
            );

            return API::createResponse($response, 1003);
        }

        isset($data['code']) ? $youtube['code'] = $data['code'] : '';
        isset($data['name']) ? $youtube['name'] = $data['name'] : '';
        isset($data['artist']) ? $youtube['artist'] = $data['artist'] : '';
        isset($data['url']) ? $youtube['url'] = $data['url'] : '';
        isset($data['description']) ? $youtube['description'] = $data['description'] : '';
        isset($data['user_id']) ? $youtube['user_id'] = $data['user_id'] : '';
        isset($data['position']) ? $youtube['position'] = $data['position'] : '';
        isset($data['type']) ? $youtube['type'] = $data['type'] : '';
        isset($data['status']) ? $youtube['status'] = $data['status'] : '';
        $youtube['updated_at'] = date("Y-m-d H:i:s");

        $query = Youtube::where('id', '=', $id)
            ->update($youtube);

        if (!$query) {
            $response = array();

            return API::createResponse($response, 1004);
        }

        $response = array(
            'record' => $data,
        );

        // // Clear cache value
        // clearCacheUpdate($this->pathcache);

        return API::createResponse($response, 0);
    }

    public function destroy($id = null)
    {
        $data = Input::all();
        $data['id'] = $id;

        // Validator request
        $rules = array(
            'id' => 'required|integer|min:1',
        );

        $validator = Validator::make($data, $rules);
        if ($validator->fails()) {
            $response = array(
                'message' => $validator->messages()->first(),
            );

            return API::createResponse($response, 1003);
        }

        $query = Youtube::find($id);
        $query->delete();

        if (!$query) {
            $response = array();

            return API::createResponse($response, 1004);
        }

        $response = array(
            'data' => $data,
        );

        // // Clear cache value
        // clearCacheDestroy($this->$pathcache);

        return API::createResponse($response, 0);
    }
}
