import vue from 'vue'
import elemnt from 'element-ui'
import {Message, MessageBox} from 'element-ui'
vue.use(elemnt)

vue.prototype.$message = Message;
vue.prototype.$confirm = MessageBox.confirm;
