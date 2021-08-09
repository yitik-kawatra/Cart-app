import * as actionTypes from "./shopping-types";
import harddrive from "./harddrive.jpg";
import led from "./LED.jpg";
import jacket from "./jacket.jpg";
import tshirt from "./tshirt.jpg";
import bangle from "./gold-bangle.jpg";
import winterj from "./winterjacket.jpg";
const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "Mens Casual Premium Slim Fit T-Shirts ",
      description: `Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket. `,
      price: 2000,
      image: tshirt,
    },
    {
      id: 2,
      title: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
      description: `USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system`,
      price: 2999.0,
      image: harddrive,
    },
    {
      id: 3,
      title:
        "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED",
      description: `49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag`,
      price: 72999.0,
      image: led,
    },
    {
      id: 4,
      title: `Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket`,
      description: `100% POLYURETHANE(shell) 100% POLYESTER(lining) 75% POLYESTER 25% COTTON (SWEATER), Faux leather material for style and comfort / 2 pockets of front, 2-For-One Hooded denim style faux leather jacket, Button detail on waist / Detail stitching at sides, HAND WASH ONLY / DO NOT BLEACH / LINE DRY / DO NOT IRON`,
      price: 1399,
      image: jacket,
    },
    {
      id: 5,
      title: `Pierced Owl Rose Gold Plated Stainless Steel Double`,
      description: `Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel`,
      price: 29500,
      image: bangle,
    },
    {
      id: 6,
      title: `BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats`,
      description: `Note:The Jackets is US standard size, Please choose size as your usual wear Material: 100% Polyester; Detachable Liner Fabric: Warm Fleece. Detachable Functional Liner: Skin Friendly, Lightweigt and Warm.Stand Collar Liner jacket, keep you warm in cold weather. Zippered Pockets: 2 Zippered Hand Pockets, 2 Zippered Pockets on Chest (enough to keep cards or keys)and 1 Hidden Pocket Inside`,
      price: 6500,
      image: winterj,
    },
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      // Great Item data from products array
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      // Check if Item is in cart already
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    case actionTypes.LOAD_CURRENT_ITEM:
      return {
        ...state,
        currentItem: action.payload,
      };
    default:
      return state;
  }
};

export default shopReducer;
