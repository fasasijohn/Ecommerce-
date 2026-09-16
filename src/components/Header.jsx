import './header.css';
import {BrandMark} from './BrandMark.jsx';
import {Link} from 'react-router';
import {publicAsset} from '../config/deployment.js';
export  function Header({cart=[]}) {

    let totalQuantity=0;
    cart.forEach((cartItem)=>{
        totalQuantity+=cartItem.quantity;
        }
    );
    return(
        <>
            <div className="header">
                <div className="left-section">
                    <Link to="/" className="header-link brand-link" aria-label="SERVIFY CAMPUS home">
                        <BrandMark/>
                    </Link>
                </div>

                <div className="middle-section">
                    <input className="search-bar" type="text" placeholder="Search"/>

                    <button className="search-button">
                        <img className="search-icon" src={publicAsset('images/icons/search-icon.png')}/>
                    </button>
                </div>

                <div className="right-section">
                    <Link className="orders-link header-link" to="/orders">

                        <span className="orders-text">Orders</span>
                    </Link>

                    <Link className="cart-link header-link" to="/checkout">
                        <img className="cart-icon" src={publicAsset('images/icons/cart-icon.png')}/>
                        <div className="cart-quantity">{totalQuantity}</div>
                        <div className="cart-text">Cart</div>
                    </Link>
                </div>
            </div>
        </>

    );

}
