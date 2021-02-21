import Liste from "@/components/ue06/Liste";
import Info from "@/components/ue06/Info";

export default [
    { name: 'info', path: '/info', component: Info, props: true},
    { name: 'liste', path: '*', component: Liste, props: true},
    //{ name: 'default', path: '*', component: { name: 'DefaultView', render: h => h('div', 'Default view') }, props: true }
]
