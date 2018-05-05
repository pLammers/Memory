<?php

include("EnumMemoryPictures.php");

class MemoryApi{

    public function __construct(){
    }


    public function getMemoryFields(){
        $memoryFields = [];

        foreach(EnumMemoryPictures::MEMORY_IMAGES as $memoryImage){
            $memoryFields[] = $this->buildMemoryField($memoryImage);
            $memoryFields[] = $this->buildMemoryField($memoryImage);
        }
        shuffle($memoryFields);

        return $memoryFields;
    }

    private function buildMemoryField($image){
        return ['image' => $image];
    }

}