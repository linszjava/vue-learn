import { reactive,onBeforeUnmount,onMounted} from 'vue';
export default function(){
    let point = reactive({
        x: 0,
        y: 0
    })
    
    function getPoint(event){
            // console.log(event.pageX,event.pageY);
            point.x = event.pageX
            point.y = event.pageY
    }
    
    onMounted(() => {
        window.addEventListener('click',getPoint)
    })
    
    onBeforeUnmount(() => {
        window.removeEventListener('click',getPoint)
    })

    return point
}
