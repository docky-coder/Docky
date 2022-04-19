<?php
namespace Docky\Config;
class Config {
    public $key,$value;
    public function add ($key, $value){
        $this->$key = $value;
    }
    public function get ($key){
        return $this->$key;
    }
}