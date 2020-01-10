import Home from './modules/home';
import ClassFiy from './modules/classfiy';
import MyMessing from './modules/myMessing';
import ShoppCart from './modules/shoppingcart'
import Special from './modules/special'
import Categorys from './modules/categorys'
import GoodsSearch from './modules/goodsSearch'

export default {
    GoodsSearch: new GoodsSearch(),
    Categorys: new Categorys(),
    Home: new Home(),
    ClassFiy: new ClassFiy(),
    MyMessing: new MyMessing(),
    ShoppCart: new ShoppCart(),
    Special: new Special()
}