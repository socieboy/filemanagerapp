<?php

return [

    'disk' => 's3',

    'path' => 'filemanager',

    'middleware' => ['web'],

    'return_url' => '',

    'max_upload_filesize' => 1024,

    'ignore_extensions' => ['gitignore'],

    'temporary_url_expired_time' => 5,

    'visibility' => 'public',
];
