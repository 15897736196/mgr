import { defineComponent,ref,onMounted,  } from 'vue';
import menu from '@/config/menu';
import { useRouter ,useRoute} from 'vue-router';


export default defineComponent({
    setup(){
        const router = useRouter();
        const route = useRoute();
        const openKeys = ref([]);
        const selectedKeys = ref([]);

        onMounted(()=>{
            selectedKeys.value = [route.path];
            menu.forEach((item)=>{
                (item.children || []).forEach((child)=>{
                    if(child.url === route.path){
                        openKeys.value= (item.title);
                    }
                });
            });
        });
        const to =(url)=>{
            router.push(url);
        }

        return{
            openKeys,
            selectedKeys,
            menu,
            to
        }
    }
})