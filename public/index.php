<?php
require_once '../Docky/autoload.php';
use Docky\App\App;
use Docky\Router\Router;
use Docky\Config\Config;
$app = new App;
$route = new Router([]);
$config = new Config;
$config->add("title", "Docky Example Website");
$route->add("/", "home");
$route->execute();
$route->run($config);