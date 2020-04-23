import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductListService {
  product;

  constructor() {
    /*this.product = [
      {
        productId: 1,
        productName: 'Sony Bravia R202F 80cm',
        productPrice: 19990,
        productImage: 'https://rukminim1.flixcart.com/image/416/416/jmawvbk0/television/a/w/t/sony-klv-32r202f-original-imaf98nwqw3txz5z.jpeg?q=70',
        productRatings: 4.2,
        productDiscount: 24,
        productDescription: 'Sony Bravia R202F 80cm (32 inch) HD Ready LED TV  (KLV-32R202F)',
        addedToCart: false
      }, {
        productId: 2,
        productName: 'Training & Gym Shoes For Men  (Black)',
        productPrice: 999,
        productImage: 'https://rukminim1.flixcart.com/image/800/960/k76ihe80/shoe/q/p/r/black-1201-44-xylus-black-original-imafphgdmj87pvqx.jpeg?q=50',
        productRatings: 4.4,
        productDiscount: 50,
        productDescription: 'Training & Gym Shoes For Men  (Black)',
        addedToCart: false
      }, {
        productId: 3,
        productName: 'Park Avenue 4X',
        productPrice: 600,
        productImage: 'https://rukminim1.flixcart.com/image/416/416/k34rki80/perfume/c/q/m/150-long-lasting-body-fragrance-marcus-perfume-park-avenue-men-original-imafmbz56znqef4b.jpeg?q=70',
        productRatings: 4.6,
        productDiscount: 50,
        productDescription: 'Park Avenue 4X Impact Premium Perfume Regal Perfume - 120 ml  (25% Extra in Pack)  (For Men)',
        addedToCart: false
      }, {
        productId: 4,
        productName: 'Men Cargos',
        productPrice: 1200,
        productImage: 'https://rukminim1.flixcart.com/image/800/960/jepzrm80/cargo/s/e/m/32-p92-doricargoblack-plus91-original-imaf3ckgpy5fcw5q.jpeg?q=50',
        productRatings: 3.9,
        productDiscount: 66,
        productDescription: 'Men Cargos',
        addedToCart: false
      }, {
        productId: 5,
        productName: 'Printed Mysore Art Silk Saree',
        productPrice: 1400,
        productImage: 'https://rukminim1.flixcart.com/image/800/960/juljwcw0/sari/m/z/p/free-800sr39-815sr199-swaron-original-imafdyz9fwvzrrzm.jpeg?q=50',
        productRatings: 4.6,
        productDiscount: 75,
        productDescription: 'Printed Mysore Art Silk Saree  (Pack of 2, Dark Blue, Pink, Orange)',
        addedToCart: false
      }, {
        productId: 6,
        productName: 'Girls Calf Length ',
        productPrice: 525,
        productImage: 'https://rukminim1.flixcart.com/image/800/960/jwdupow0/kids-dress/m/8/m/6-7-years-bgbuton-kl-collection-original-imafh2sanwzxy6sk.jpeg?q=50',
        productRatings: 3.8,
        productDiscount: 66,
        productDescription: 'Girls Calf Length Casual Dress  (Blue, 3/4 Sleeve)',
        addedToCart: false
      }, {
        productId: 7,
        productName: 'SAF 6MM MDF FLORAL',
        productPrice: 625,
        productImage: 'https://rukminim1.flixcart.com/image/416/416/k0o69ow0/painting/4/m/9/fj-n003-saf-original-imafkcu4tf6tvsdv.jpeg?q=70',
        productRatings: 4.5,
        productDiscount: 83,
        productDescription: 'SAF 6MM MDF FLORAL Digital Reprint 15 inch x 6 inch Painting',
        addedToCart: false
      }, {
        productId: 8,
        productName: 'lark full size cricket ',
        productPrice: 999,
        productImage: 'https://rukminim1.flixcart.com/image/416/416/k5jxfgw0/bat/4/p/7/0-250-harrow-full-size-cricket-bat-97967976-sm-original-imafk8fnzjcftqbj.jpeg?q=70',
        productRatings: 3.8,
        productDiscount: 67,
        productDescription: 'lark full size cricket bat Poplar Willow Cricket Bat  (0.700 kg)',
        addedToCart: false
      }, {
        productId: 9,
        productName: 'Stag FITNESS PVC 25 KG',
        productPrice: 1389,
        productImage: 'https://rukminim1.flixcart.com/image/416/416/js0o9zk0/kit/v/c/m/fitness-pvc-25-kg-curl-and-straight-rod-super-deluxe-homegym-original-imafdzsuy6yv23ag.jpeg?q=70',
        productRatings: 3,
        productDiscount: 71,
        productDescription: 'Stag FITNESS PVC 25 KG CURL AND STRAIGHT ROD SUPER DELUXE HOMEGYM COMBO Gym & Fitness Kit',
        addedToCart: false
      }, {
        productId: 10,
        productName: 'Death; An Inside Story  ',
        productPrice: 425,
        productImage: 'https://rukminim1.flixcart.com/image/416/416/k6i7zww0/book/8/3/2/death-an-inside-story-original-imafnzm3raf8cza8.jpeg?q=70',
        productRatings: 4.5,
        productDiscount: 34,
        productDescription: 'Death; An Inside Story  (English, Paperback, Sadhguru)',
        addedToCart: false
      }
    ];*/
  }
}
