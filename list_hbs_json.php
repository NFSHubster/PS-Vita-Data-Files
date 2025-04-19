<?php
header('Content-Type: application/json');

$games = [
    [
        "id" => "ffdim",
        "title" => "Final Fantasy Dimensions",
        "titleid" => "FNDIM0001",
        "description" => "Classic episodic RPG with retro vibes",
        "url" => "https://ia600408.us.archive.org/19/items/psv-homebrew/Data%20Files/Fina%20Fantasy%20Dimensions.zip",
        "icon" => "https://assets-prd.ignimgs.com/2022/05/23/ffdimensions-1653332120734.jpg?width=300&crop=1:1%2Csmart",
        "hash" => "",
        "hash2" => ""
    ],
    [
        "id" => "ff3",
        "title" => "Final Fantasy III",
        "titleid" => "FF3000001",
        "description" => "3D remake of the NES original",
        "url" => "https://dn721608.ca.archive.org/0/items/psv-homebrew/Data%20Files/Final%20Fantasy%203%20%28ff3%29.zip",
        "icon" => "https://image.api.playstation.com/vulcan/ap/rnd/202301/1210/7SjuZOeJFmJutHbNviOsfhHa.png",
        "hash" => "",
        "hash2" => ""
    ],
    [
        "id" => "ff4",
        "title" => "Final Fantasy IV",
        "titleid" => "FF4000001",
        "description" => "The tale of Cecil’s redemption",
        "url" => "https://dn721608.ca.archive.org/0/items/psv-homebrew/Data%20Files/Final%20Fantasy%204%20%28ff4%29.zip",
        "icon" => "https://tse3.mm.bing.net/th?id=OIP.BQ-saEVLM4FxubmbkEkHVwHaHa&pid=Api&P=0&h=220",
        "hash" => "",
        "hash2" => ""
    ],
    [
        "id" => "ff4a",
        "title" => "Final Fantasy IV: The After Years",
        "titleid" => "FF4AY0001",
        "description" => "Direct sequel with new lunar threats",
        "url" => "https://dn721608.ca.archive.org/0/items/psv-homebrew/Data%20Files/Final%20Fantasy%20After%20Years%28ff4a%29.zip",
        "icon" => "https://tse3.mm.bing.net/th?id=OIP.iAzlMiMXLdHus_aP5ERY5QHaHa&pid=Api&P=0&h=220",
        "hash" => "",
        "hash2" => ""
    ],
    [
        "id" => "ff5",
        "title" => "Final Fantasy V",
        "titleid" => "FF5000001",
        "description" => "Job system mastery with a fresh story",
        "url" => "https://dn721608.ca.archive.org/0/items/psv-homebrew/Data%20Files/Final%20Fantasy%205%20%28ff5%29.zip",
        "icon" => "https://gamefaqs.gamespot.com/a/box/7/8/8/929788_front.jpg",
        "hash" => "",
        "hash2" => ""
    ]
];

echo json_encode($games, JSON_PRETTY_PRINT);
