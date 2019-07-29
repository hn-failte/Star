import {data, domcreated, mounted, dataUpdate, domUpdate, updated, destroy} from "./lifeCycle"
import getRoot from "./components/baseComponent"

export default function() {
    try{ //创建数据
        this.data = data();
    } catch(e) {
        console.log(e)
    }
    try{ //获取节点
        domcreated();
    } catch(e) {
        console.log(e)
    }
    try{
        mounted(); //节点与数据绑定
    } catch(e) {
        console.log(e)
    }
    try{
        dataUpdate(); //数据发生更新
    } catch(e) {
        console.log(e)
    }
    try{
        domUpdate(); //节点发生更新
    } catch(e) {
        console.log(e)
    }
    try{
        updated(); //更新完成
    } catch(e) {
        console.log(e)
    }
    try{
        destroy(); //实例销毁前
    } catch(e) {
        console.log(e)
    }
}