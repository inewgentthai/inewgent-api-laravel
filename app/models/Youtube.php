<?php

class Youtube extends Eloquent
{

    public function scopeFilters($query, $filters = array())
    {
        if ($val = array_get($filters, 'id')) {
            $query->where('id', '=', $val);
        }

        if ($val = array_get($filters, 'user_id')) {
            $query->where('user_id', '=', $val);
        }

        if (isset($filters['status'])) {
            $val = array_get($filters, 'status');
            $query->where('status', '=', $val);
        }

        if ($val = array_get($filters, 's')) {
            $query->where('title', 'LIKE', '%'.$val.'%');
            $query->orWhere('subtitle', 'LIKE', '%'.$val.'%');
        }

        return $query;
    }
}