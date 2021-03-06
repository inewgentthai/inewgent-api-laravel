define({ "api": [
  {
    "type": "post",
    "url": "/api/category",
    "title": "Add Category Infomation",
    "version": "1.0.0",
    "name": "AddCategory",
    "group": "Category",
    "parameter": {
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n   'store_id' => '1',\n   'user_id' => '205',\n   'sort_order' => 'manual',\n   'parent_id' => '0',\n   'position' => '0',\n   'product_count' => '0',\n   'status' => 'true',\n   'title' => array(\n       'th' => 'xxx'\n   ),\n   'body_html' => array(\n       'th' => 'xxx'\n   ),\n   'seo' => array(\n       'title' => array(\n           'th' => 'xxx'\n       ),\n       'description' => array(\n           'th' => 'xxx'\n       )\n   )\n}",
          "type": "post"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "store_id",
            "description": "<p>ID of the shop.</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID of the member user.</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "sort_order",
            "description": "<p>Sort type for order the category.</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "parent_id",
            "description": "<p>Parent or level of the category.</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "position",
            "description": "<p>position The position of category.</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "product_count",
            "description": "<p>Number product of the category.</p> "
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "status",
            "description": "<p>Status of the category.</p> "
          },
          {
            "group": "Parameter",
            "type": "Array[]",
            "optional": false,
            "field": "title",
            "description": "<p>List of title for the category</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title.th",
            "description": "<p>Thai title for the category</p> "
          },
          {
            "group": "Parameter",
            "type": "Array[]",
            "optional": true,
            "field": "body_html",
            "description": "<p>List of description for the category</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "body_html.th",
            "description": "<p>Thai description for the category</p> "
          },
          {
            "group": "Parameter",
            "type": "Array[]",
            "optional": true,
            "field": "seo",
            "description": "<p>List of seo for the category</p> "
          },
          {
            "group": "Parameter",
            "type": "Array[]",
            "optional": true,
            "field": "seo.title",
            "description": "<p>List of seo title for the category</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "seo.title.th",
            "description": "<p>Thai seo title for the category</p> "
          },
          {
            "group": "Parameter",
            "type": "Array[]",
            "optional": true,
            "field": "seo.description",
            "description": "<p>List of seo description for the category</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "seo.description.th",
            "description": "<p>Thai seo description fo the category</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "status_code",
            "description": "<p>Code status of api.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status_txt",
            "description": "<p>Status message of api.</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Data object of the category.</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the category.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "HTTP/1.1 200 OK\n\n   {\n       \"status_code\": 0,\n       \"status_txt\": \"Success\",\n       \"data\": {\n           \"id\": 1\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unprocessable",
            "description": "<p>The store/user id field is required.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DataNotFound",
            "description": "<p>The request was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Unprocessable:",
          "content": "HTTP/1.1 422 Unprocessable Entity\n   {\n       \"status_code\": 1003,\n       \"status_txt\": \"Invalid parameter\",\n       \"data\": {\n           \"message\": \"The store id field is required.\"\n       }\n   }",
          "type": "json"
        },
        {
          "title": "DataNotFound:",
          "content": "HTTP/1.1 404 Not Found\n   {\n       \"status_code\": 1004,\n       \"status_txt\": \"Data not found\",\n       \"data\": [ ]\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/controllers/ApiCategoryController.php",
    "groupTitle": "Category"
  },
  {
    "type": "delete",
    "url": "/api/category/:id",
    "title": "Delete Category Infomation",
    "version": "1.0.0",
    "name": "DeleteCategory",
    "group": "Category",
    "parameter": {
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n   'id' => '1',\n   'user_id' => '205'\n}",
          "type": "delete"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the category.</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "store_id",
            "description": "<p>ID of the shop.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "status_code",
            "description": "<p>Code status of api.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status_txt",
            "description": "<p>Status message of api.</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Data object of the category.</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the category.</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "affected",
            "description": "<p>Result of remove for the category.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "HTTP/1.1 200 OK\n\n   {\n       \"status_code\": 0,\n       \"status_txt\": \"Success\",\n       \"data\": {\n           \"id\": \"1\",\n           \"affected\": \"true\"\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unprocessable",
            "description": "<p>The store/user id field is required.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DataNotFound",
            "description": "<p>The request was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Unprocessable:",
          "content": "HTTP/1.1 422 Unprocessable Entity\n   {\n       \"status_code\": 1003,\n       \"status_txt\": \"Invalid parameter\",\n       \"data\": {\n           \"message\": \"The store id field is required.\"\n       }\n   }",
          "type": "json"
        },
        {
          "title": "DataNotFound:",
          "content": "HTTP/1.1 404 Not Found\n   {\n       \"status_code\": 1004,\n       \"status_txt\": \"Data not found\",\n       \"data\": [ ]\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/controllers/ApiCategoryController.php",
    "groupTitle": "Category"
  },
  {
    "type": "get",
    "url": "/api/category",
    "title": "Request Category Infomation",
    "version": "1.0.0",
    "name": "GetCategory",
    "group": "Category",
    "parameter": {
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n  \"store_id\" : \"1\",\n  \"parent_id\"  : \"0\",\n  \"fields\"   : \"id,store_id,user_id,parent_id,position,status,title,seo,body_htm\"\n}",
          "type": "get"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "store_id",
            "description": "<p>ID of the shop.</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "parent_id",
            "defaultValue": "0",
            "description": "<p>Parent or level of the category</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "fields",
            "description": "<p>Field of the category infomation.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "status_code",
            "description": "<p>Code status of api.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status_txt",
            "description": "<p>Status message of api.</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Data object of the category.</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "benchmark",
            "description": "<p>Benchmark status.</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "pagination",
            "description": "<p>Pagination object.</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "current",
            "description": "<p>Current page.</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Item per page.</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "total",
            "description": "<p>Total number of page category.</p> "
          },
          {
            "group": "Success 200",
            "type": "record",
            "optional": false,
            "field": "record",
            "description": "<p>Array of the category detail.</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the category.</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "store_id",
            "description": "<p>ID of the shop.</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID of User member.</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "parent_id",
            "description": "<p>Parent or level of the category.</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "sort_order",
            "description": "<p>Sort type for order the category.</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "position",
            "description": "<p>The position of category.</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "product_count",
            "description": "<p>Number product of the category.</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "disable_product_count",
            "description": "<p>Number disabed product of the category.</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "product_offline",
            "description": "<p>Number offline product of the category.</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "total_product_count",
            "description": "<p>Number all product of the category.</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "total_child_count",
            "description": "<p>Number child of the category.</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the category.</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "created_at",
            "description": "<p>List of created for the category.</p> "
          },
          {
            "group": "Success 200",
            "type": "Datetime",
            "optional": false,
            "field": "created_at.date",
            "description": "<p>Created datetime for the category.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at.timeago",
            "description": "<p>Created time ago for the category.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at.format",
            "description": "<p>Created format for the category.</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "updated_at",
            "description": "<p>List of updated for the category.</p> "
          },
          {
            "group": "Success 200",
            "type": "Datetime",
            "optional": false,
            "field": "updated_at.date",
            "description": "<p>Updated datetime for the category.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at.timeago",
            "description": "<p>Updated time ago for the category.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at.format",
            "description": "<p>Updated format for the category.</p> "
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "images",
            "description": "<p>Images or banner for the category.</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "title",
            "description": "<p>List of title or subject for the category.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title.th",
            "description": "<p>Thai title or subject for the category.</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "seo",
            "description": "<p>List of seo for the category.</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "seo.title",
            "description": "<p>List title for the seo category.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "seo.title.th",
            "description": "<p>Thai title for the seo category.</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "seo.description",
            "description": "<p>List description for the seo category.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "seo.description.th",
            "description": "<p>Thai description for the seo category.</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "body_html",
            "description": "<p>Description for the category.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "body_html.th",
            "description": "<p>Thai description for the category.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "HTTP/1.1 200 OK\n\n   {\n       \"status_code\": 0,\n       \"status_txt\": \"Success\",\n       \"data\": {\n           \"benchmark\": \"false\",\n           \"pagination\": {\n               \"current\": 1,\n               \"limit\": 20,\n               \"total\": 29\n           },\n           \"record\": [\n               {\n                   \"id\": \"1069\",\n                   \"store_id\": \"1\",\n                   \"user_id\": \"205\",\n                   \"parent_id\": \"0\",\n                   \"sort_order\": \"0\",\n                   \"position\": \"1\",\n                   \"product_count\": \"0\",\n                   \"disable_product_count\": \"0\",\n                   \"product_offline\": null,\n                   \"total_product_count\": 0,\n                   \"total_child_count\": 0,\n                   \"status\": \"true\",\n                   \"created_at\": {\n                       \"date\": \"2015-03-11 15:19:44\",\n                       \"timeago\": \"3 weeks ago\",\n                       \"format\": \"11 March 2015 3:19 PM\"\n                   },\n                   \"updated_at\": {\n                       \"date\": \"2015-03-11 15:19:44\",\n                       \"timeago\": \"3 weeks ago\",\n                       \"format\": \"11 March 2015 3:19 PM\"\n                   },\n                   \"images\": [],\n                   \"title\": {\n                       \"th\": \"???????????????????????????????????????????????????????????????\"\n                   },\n                   \"seo\": {\n                       \"title\": {\n                           \"th\": \"???????????????????????????????????????????????????????????????\"\n                       },\n                       \"description\": {\n                           \"th\": \"\"\n                       }\n                   },\n                   \"body_html\": {\n                       \"th\": \"\"\n                   }\n               }\n           ]\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unprocessable",
            "description": "<p>The store/user id field is required.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DataNotFound",
            "description": "<p>The request was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Unprocessable:",
          "content": "HTTP/1.1 422 Unprocessable Entity\n   {\n       \"status_code\": 1003,\n       \"status_txt\": \"Invalid parameter\",\n       \"data\": {\n           \"message\": \"The store id field is required.\"\n       }\n   }",
          "type": "json"
        },
        {
          "title": "DataNotFound:",
          "content": "HTTP/1.1 404 Not Found\n   {\n       \"status_code\": 1004,\n       \"status_txt\": \"Data not found\",\n       \"data\": [ ]\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/controllers/ApiCategoryController.php",
    "groupTitle": "Category"
  },
  {
    "type": "get",
    "url": "/api/category/:id",
    "title": "Show Category Infomation",
    "version": "1.0.0",
    "name": "GetCategoryByID",
    "group": "Category",
    "parameter": {
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n  \"store_id\" : \"1\",\n  \"fields\"   : \"id,store_id,user_id,parent_id,position,status,title,seo,body_htm\"\n}",
          "type": "get"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "store_id",
            "description": "<p>ID of the shop.</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "fields",
            "description": "<p>Field of the category infomation.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "status_code",
            "description": "<p>Code status of api.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status_txt",
            "description": "<p>Status message of api.</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Data object of the category.</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "benchmark",
            "description": "<p>Benchmark status.</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "pagination",
            "description": "<p>Pagination object.</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "current",
            "description": "<p>Current page.</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Item per page.</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "total",
            "description": "<p>Total number of page category.</p> "
          },
          {
            "group": "Success 200",
            "type": "record",
            "optional": false,
            "field": "record",
            "description": "<p>Array of the category detail.</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the category.</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "store_id",
            "description": "<p>ID of the shop.</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID of User member.</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "parent_id",
            "description": "<p>Parent or level of the category.</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "sort_order",
            "description": "<p>Sort type for order the category.</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "position",
            "description": "<p>The position of category.</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "product_count",
            "description": "<p>Number product of the category.</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "disable_product_count",
            "description": "<p>Number disabed product of the category.</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "product_offline",
            "description": "<p>Number offline product of the category.</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "total_product_count",
            "description": "<p>Number all product of the category.</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "total_child_count",
            "description": "<p>Number child of the category.</p> "
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "status",
            "description": "<p>Status of the category.</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "created_at",
            "description": "<p>List of created for the category.</p> "
          },
          {
            "group": "Success 200",
            "type": "Datetime",
            "optional": false,
            "field": "created_at.date",
            "description": "<p>Created datetime for the category.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at.timeago",
            "description": "<p>Created time ago for the category.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "created_at.format",
            "description": "<p>Created format for the category.</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "updated_at",
            "description": "<p>List of updated for the category.</p> "
          },
          {
            "group": "Success 200",
            "type": "Datetime",
            "optional": false,
            "field": "updated_at.date",
            "description": "<p>Updated datetime for the category.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at.timeago",
            "description": "<p>Updated time ago for the category.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "updated_at.format",
            "description": "<p>Updated format for the category.</p> "
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "images",
            "description": "<p>Images or banner for the category.</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "title",
            "description": "<p>List of title or subject for the category.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title.th",
            "description": "<p>Thai title or subject for the category.</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "seo",
            "description": "<p>List of seo for the category.</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "seo.title",
            "description": "<p>List title for the seo category.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "seo.title.th",
            "description": "<p>Thai title for the seo category.</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "seo.description",
            "description": "<p>List description for the seo category.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "seo.description.th",
            "description": "<p>Thai description for the seo category.</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "body_html",
            "description": "<p>Description for the category.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "body_html.th",
            "description": "<p>Thai description for the category.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "HTTP/1.1 200 OK\n\n   {\n       \"status_code\": 0,\n       \"status_txt\": \"Success\",\n       \"data\": {\n           \"benchmark\": \"false\",\n           \"record\": [\n               {\n                   \"id\": \"1069\",\n                   \"store_id\": \"1\",\n                   \"user_id\": \"205\",\n                   \"parent_id\": \"0\",\n                   \"sort_order\": \"0\",\n                   \"position\": \"1\",\n                   \"product_count\": \"0\",\n                   \"disable_product_count\": \"0\",\n                   \"product_offline\": null,\n                   \"total_product_count\": 0,\n                   \"total_child_count\": 0,\n                   \"status\": \"true\",\n                   \"created_at\": {\n                       \"date\": \"2015-03-11 15:19:44\",\n                       \"timeago\": \"3 weeks ago\",\n                       \"format\": \"11 March 2015 3:19 PM\"\n                   },\n                   \"updated_at\": {\n                       \"date\": \"2015-03-11 15:19:44\",\n                       \"timeago\": \"3 weeks ago\",\n                       \"format\": \"11 March 2015 3:19 PM\"\n                   },\n                   \"images\": [],\n                   \"title\": {\n                       \"th\": \"???????????????????????????????????????????????????????????????\"\n                   },\n                   \"seo\": {\n                       \"title\": {\n                           \"th\": \"???????????????????????????????????????????????????????????????\"\n                       },\n                       \"description\": {\n                           \"th\": \"\"\n                       }\n                   },\n                   \"body_html\": {\n                       \"th\": \"\"\n                   }\n               }\n           ]\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unprocessable",
            "description": "<p>The store/user id field is required.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DataNotFound",
            "description": "<p>The request was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Unprocessable:",
          "content": "HTTP/1.1 422 Unprocessable Entity\n   {\n       \"status_code\": 1003,\n       \"status_txt\": \"Invalid parameter\",\n       \"data\": {\n           \"message\": \"The store id field is required.\"\n       }\n   }",
          "type": "json"
        },
        {
          "title": "DataNotFound:",
          "content": "HTTP/1.1 404 Not Found\n   {\n       \"status_code\": 1004,\n       \"status_txt\": \"Data not found\",\n       \"data\": [ ]\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/controllers/ApiCategoryController.php",
    "groupTitle": "Category"
  },
  {
    "type": "put",
    "url": "/api/category/:id",
    "title": "Update Category Infomation",
    "version": "1.0.0",
    "name": "UpdateCategory",
    "group": "Category",
    "parameter": {
      "examples": [
        {
          "title": "Request Example:",
          "content": "{\n   'store_id' => '1',\n   'user_id' => '205',\n   'sort_order' => 'manual',\n   'parent_id' => '0',\n   'position' => '0',\n   'product_count' => '0',\n   'status' => 'true',\n   'title' => array(\n       'th' => 'xxx'\n   ),\n   'body_html' => array(\n       'th' => 'xxx'\n   ),\n   'seo' => array(\n       'title' => array(\n           'th' => 'xxx'\n       ),\n       'description' => array(\n           'th' => 'xxx'\n       )\n   )\n}",
          "type": "put"
        }
      ],
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "store_id",
            "description": "<p>ID of the shop.</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID of the member user.</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "sort_order",
            "description": "<p>Sort type for order the category.</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "parent_id",
            "description": "<p>Parent or level of the category.</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "position",
            "description": "<p>position The position of category.</p> "
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": true,
            "field": "product_count",
            "description": "<p>Number product of the category.</p> "
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "status",
            "description": "<p>Status of the category.</p> "
          },
          {
            "group": "Parameter",
            "type": "Array[]",
            "optional": false,
            "field": "title",
            "description": "<p>List of title for the category</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "title.th",
            "description": "<p>Thai title for the category</p> "
          },
          {
            "group": "Parameter",
            "type": "Array[]",
            "optional": true,
            "field": "body_html",
            "description": "<p>List of description for the category</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "body_html.th",
            "description": "<p>Thai description for the category</p> "
          },
          {
            "group": "Parameter",
            "type": "Array[]",
            "optional": true,
            "field": "seo",
            "description": "<p>List of seo for the category</p> "
          },
          {
            "group": "Parameter",
            "type": "Array[]",
            "optional": true,
            "field": "seo.title",
            "description": "<p>List of seo title for the category</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "seo.title.th",
            "description": "<p>Thai seo title for the category</p> "
          },
          {
            "group": "Parameter",
            "type": "Array[]",
            "optional": true,
            "field": "seo.description",
            "description": "<p>List of seo description for the category</p> "
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "seo.description.th",
            "description": "<p>Thai seo description fo the category</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "status_code",
            "description": "<p>Code status of api.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "status_txt",
            "description": "<p>Status message of api.</p> "
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "data",
            "description": "<p>Data object of the category.</p> "
          },
          {
            "group": "Success 200",
            "type": "Object[]",
            "optional": false,
            "field": "title",
            "description": "<p>List of title for the category.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title.th",
            "description": "<p>of the category.</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "store_id",
            "description": "<p>ID of the category.</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "user_id",
            "description": "<p>ID of the category.</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "parent_id",
            "description": "<p>ID of the category.</p> "
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the category.</p> "
          },
          {
            "group": "Success 200",
            "type": "Array[]",
            "optional": false,
            "field": "sync",
            "description": "<p>ID of the category.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success Response:",
          "content": "HTTP/1.1 200 OK\n\n   {\n       \"status_code\": 0,\n       \"status_txt\": \"Success\",\n       \"data\": {\n           \"title\": {\n               \"th\": \"aaaa\"\n           },\n           \"store_id\": \"1\",\n           \"user_id\": \"205\",\n           \"parent_id\": \"0\",\n           \"id\": \"1084\",\n           \"sync\": []\n       }\n   }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "Unprocessable",
            "description": "<p>The store/user id field is required.</p> "
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "DataNotFound",
            "description": "<p>The request was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Unprocessable:",
          "content": "HTTP/1.1 422 Unprocessable Entity\n   {\n       \"status_code\": 1003,\n       \"status_txt\": \"Invalid parameter\",\n       \"data\": {\n           \"message\": \"The store id field is required.\"\n       }\n   }",
          "type": "json"
        },
        {
          "title": "DataNotFound:",
          "content": "HTTP/1.1 404 Not Found\n   {\n       \"status_code\": 1004,\n       \"status_txt\": \"Data not found\",\n       \"data\": [ ]\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/controllers/ApiCategoryController.php",
    "groupTitle": "Category"
  },
  {
    "type": "post",
    "url": "/option/:id",
    "title": "Add User information",
    "name": "AddOptionGroup",
    "group": "Product_Option",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"firstname\": \"John\",\n  \"lastname\": \"Doe\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controllers/ApiOptionGroupController.php",
    "groupTitle": "Product_Option"
  },
  {
    "type": "delete",
    "url": "/option/:id",
    "title": "Delete User information",
    "name": "DeleteOptionGroup",
    "group": "Product_Option",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"firstname\": \"John\",\n  \"lastname\": \"Doe\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controllers/ApiOptionGroupController.php",
    "groupTitle": "Product_Option"
  },
  {
    "type": "get",
    "url": "/option/:id",
    "title": "Request User information",
    "name": "GetOptionGroup",
    "group": "Product_Option",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"firstname\": \"John\",\n  \"lastname\": \"Doe\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controllers/ApiOptionGroupController.php",
    "groupTitle": "Product_Option"
  },
  {
    "type": "get",
    "url": "/option/:id",
    "title": "Show User information",
    "name": "ShowOptionGroup",
    "group": "Product_Option",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"firstname\": \"John\",\n  \"lastname\": \"Doe\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controllers/ApiOptionGroupController.php",
    "groupTitle": "Product_Option"
  },
  {
    "type": "put",
    "url": "/option/:id",
    "title": "Update User information",
    "name": "UpdateOptionGroup",
    "group": "Product_Option",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Users unique ID.</p> "
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "firstname",
            "description": "<p>Firstname of the User.</p> "
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "lastname",
            "description": "<p>Lastname of the User.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"firstname\": \"John\",\n  \"lastname\": \"Doe\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p> "
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "app/controllers/ApiOptionGroupController.php",
    "groupTitle": "Product_Option"
  }
] });