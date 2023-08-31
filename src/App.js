import clsx from 'clsx';

import styles from './App.module.scss'
import GlobalStyles from "./components/global/GlobalStyles";
import SideBar from "./components/sidebar/Sidebar";
import MainContainer from "./components/main_container/MainContainer";

// callback luôn được gọi khi component mount
// clean up function luôn được gọi trước khi component unmount
// cleanup function luôn dược gọi tước khi callback được gọi (trừ lần mount)

// 1.useEffect(callback)
//  luôn được gọi khi component re-render
//  gọi callback sau khi component thêm element vào DOM

// 2.useEffect(callback, [])
//  chỉ gọi khi component mount

// 3.useEffeact(callback,[deps])
// chỉ gọi khi deps thay đổi (so sánh giữa trước là sau render băng toán tử ===)

//useRef : tạo ra 1 biến ngoài phạm vi để chứa giá trị / chứa dom element
//memo : ghi nhớ prop của 1 component
// useCallback : tránh tạo ra những hàm mới không cần thiết (trả về giá trị cho biến ngoài phạm vi) 
//useMemo : tránh thực hiện lại 1 logic không cần  thiết
//useReducer : tương tự useState(phù hợp với dữ liệu phức tạp)
    //1.intial State
    //2.Actions
    //3.reducer
    //4.dispatch
//useContext : truyền dữ liệu từ component cha xuống component con không cần sử dụng prop


function App () {
    
    
    return (
        <GlobalStyles>
            <div className={clsx(styles.app_container)}>
                <SideBar />
                <MainContainer />
            </div>
        </GlobalStyles>
        
    );
}

export default App;
