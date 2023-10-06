<?php
header('Content-Type: application/json;charset=utf-8');
header("Access-Control-Allow-Origin:*");


$lsp = [
    [
      'id' =>0,
      'hinhanh'=> "O-Long-xoai-kem-coffee.jpg",
      'tenSP'=> "Ô Long Xoài Kem Coffee",
      'gia'=> 49000,
      
    ],
    [
        'id' =>1,
        'hinhanh'=> "oolong-kem-pho-mai.png",
        'tenSP'=> "Ô Long Kem Phô Mai",
        'gia'=> 29000,
        
      ],
      [
        'id' =>2,
        'hinhanh'=> "Tra-dao-buoi-hong-tran-chau-baby.jpg",
        'tenSP'=> "Trà Đào Bưởi Hồng Chân Châu Baby",
        'gia'=> 38000,
        
      ],
      [
        'id' =>3,
        'hinhanh'=> "tra-sua-3-ae.jpg",
        'tenSP'=> "Ô Long Xoài Kem Coffee",
        'gia'=> 49000,
        
      ],
      [
        'id' =>4,
        'hinhanh'=> "tra-sua-pada.jpg",
        'tenSP'=> "Trà Sữa Pada",
        'gia'=> 24000,
        
      ],
      [
        'id' =>0,
        'hinhanh'=> "O-Long-xoai-kem-coffee.jpg",
        'tenSP'=> "Ô Long Xoài Kem Coffee",
        'gia'=> 49000,
        
      ],
      [
        'id' =>6,
        'hinhanh'=> "trà-xoài-bưởi-hồng-kem-phô-mai.png",
        'tenSP'=> "trà-xoài-bưởi-hồng-kem-phô-mai.png",
        'gia'=> 38000,
        
      ],
      [
        'id' =>7,
        'hinhanh'=> "trà-xoài-bưởi-hồng-kem-phô-mai.png",
        'tenSP'=> "Trà Xoài Bưởi Hồng",
        'gia'=> 24000,
        
      ],
  ];
  
  echo json_encode($lsp);