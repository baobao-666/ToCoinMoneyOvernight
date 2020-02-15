import Home from './modules/home';
import ClassFiy from './modules/classfiy';
import ShoppCollects from './modules/shoppCollects';
import ShoppCart from './modules/shoppingcart';
import Special from './modules/special';
import Categorys from './modules/categorys';
import AddRess from './modules/address'
import GoodsSearch from './modules/goodsSearch'
import Particular from './modules/particular'

export default {
    GoodsSearch: new GoodsSearch(),
    Categorys: new Categorys(),
    Home: new Home(),
    ClassFiy: new ClassFiy(),
    ShoppCollects: new ShoppCollects(),
    ShoppCart: new ShoppCart(),
    Special: new Special(),
    AddRess: new AddRess(),
    Particular:new Particular()
}