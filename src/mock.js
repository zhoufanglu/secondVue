//引入mockjs
import Mock from "mockjs"
//使用mockjs模拟数据
let useMock = (isOpenMock) =>{
    if(isOpenMock === false) return false;
    Mock.mock('/api/data', (req, res) => {
        return {
           item:{
               'id': ()=>Random.guid(),
               'name':()=>Random.ctitle(),
               'stem':()=>Random.cparagraph(5,10),
               'point': ()=>Random.integer(10,20),
               //    'score': ()=>Random.integer(0,8),
               'type':"score",
           }
        }
    })
}
export default useMock;