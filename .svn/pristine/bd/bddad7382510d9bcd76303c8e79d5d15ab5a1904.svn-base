<?php

/*******I方法过滤函数 从TP框架 ThinkPHP\Common\functions.php文件移植********/

/**
 * 获取输入参数 支持过滤和默认值
 * 使用方法:
 * <code>
 * I('id',0); 获取id参数 自动判断get或者post
 * I('post.name','','htmlspecialchars'); 获取$_POST['name']
 * I('get.'); 获取$_GET
 * </code>
 * @param string $name 变量的名称 支持指定类型
 * @param mixed $default 不存在的时候默认值
 * @param mixed $filter 参数过滤方法
 * @param mixed $datas 要获取的额外数据源
 * @return mixed
 */
function I($name,$default='',$filter=null,$datas=null) {
    static $_PUT    =   null;
    if(strpos($name,'/')){ // 指定修饰符
        list($name,$type)   =   explode('/',$name,2);
    }
    if(strpos($name,'.')) { // 指定参数来源
        list($method,$name) =   explode('.',$name,2);
    }else{ // 默认为自动判断
        $method =   'param';
    }
    switch(strtolower($method)) {
        case 'get'     :   
            $input =& $_GET;
            break;
        case 'post'    :   
            // $input =& $_POST;
            $input = array_merge($_POST, $_GET);
            break;
        case 'put'     :   
            if(is_null($_PUT)){
                parse_str(file_get_contents('php://input'), $_PUT);
            }
            $input  =   $_PUT;        
            break;
        case 'param'   :
            switch($_SERVER['REQUEST_METHOD']) {
                case 'POST':
                    // $input  =  $_POST;
                    $input = array_merge($_POST, $_GET);
                    break;
                case 'PUT':
                    if(is_null($_PUT)){
                        parse_str(file_get_contents('php://input'), $_PUT);
                    }
                    $input  =   $_PUT;
                    break;
                default:
                    $input  =  $_GET;
            }
            break;
        case 'path'    :   
            $input  =   array();
            if(!empty($_SERVER['PATH_INFO'])){
                $depr   =   '&';
                $input  =   explode($depr,trim($_SERVER['PATH_INFO'],$depr));            
            }
            break;
        case 'request' :   
            $input =& $_REQUEST;   
            break;
        case 'session' :   
            $input =& $_SESSION;   
            break;
        case 'cookie'  :   
            $input =& $_COOKIE;    
            break;
        case 'server'  :   
            $input =& $_SERVER;    
            break;
        case 'globals' :   
            $input =& $GLOBALS;    
            break;
        case 'data'    :   
            $input =& $datas;      
            break;
        default:
            return null;
    }
    if(''==$name) { // 获取全部变量
        $data       =   $input;
        $filters    =   isset($filter)?$filter:'htmlspecialchars';
        if($filters) {
            if(is_string($filters)){
                $filters    =   explode(',',$filters);
            }
            foreach($filters as $filter){
                $data   =   array_map_recursive($filter,$data); // 参数过滤
            }
        }
    }elseif(isset($input[$name])) { // 取值操作
        $data       =   $input[$name];
        $filters    =   isset($filter)?$filter:'htmlspecialchars';
        if($filters) {
            if(is_string($filters)){
                if(0 === strpos($filters,'/')){
                    if(1 !== preg_match($filters,(string)$data)){
                        // 支持正则验证
                        return   isset($default) ? $default : null;
                    }
                }else{
                    $filters    =   explode(',',$filters);                    
                }
            }elseif(is_int($filters)){
                $filters    =   array($filters);
            }
            
            if(is_array($filters)){
                foreach($filters as $filter){
                    if(function_exists($filter)) {
                        $data   =   is_array($data) ? array_map_recursive($filter,$data) : $filter($data); // 参数过滤
                    }else{
                        $data   =   filter_var($data,is_int($filter) ? $filter : filter_id($filter));
                        if(false === $data) {
                            return   isset($default) ? $default : null;
                        }
                    }
                }
            }
        }
        if(!empty($type)){
            switch(strtolower($type)){
                case 'a':   // 数组
                    $data   =   (array)$data;
                    break;
                case 'd':   // 数字
                    $data   =   (int)$data;
                    break;
                case 'f':   // 浮点
                    $data   =   (float)$data;
                    break;
                case 'b':   // 布尔
                    $data   =   (boolean)$data;
                    break;
                case 's':   // 字符串
                default:
                    $data   =   (string)$data;
            }
        }
    }else{ // 变量默认值
        $data       =    isset($default)?$default:null;
    }
    is_array($data) && array_walk_recursive($data,'think_filter');
    if ($data === '') {
        $data = isset($default)?$default:null;
    }
    return $data;
}
function array_map_recursive($filter, $data) {
    $result = array();
    foreach ($data as $key => $val) {
        $result[$key] = is_array($val)
         ? array_map_recursive($filter, $val)
         : call_user_func($filter, $val);
    }
    return $result;
}
function think_filter(&$value){
    // 过滤查询特殊字符
    if(preg_match('/^(EXP|NEQ|GT|EGT|LT|ELT|OR|XOR|LIKE|NOTLIKE|NOT BETWEEN|NOTBETWEEN|BETWEEN|NOTIN|NOT IN|IN)$/i',$value)){
        $value .= ' ';
    }
    // if(preg_match('/(delete|DELETE|update|UPDATE|insert|INSERT|select|SELECT)/',$value)){
    //     $arr1 = array('delete','update','insert','select');
    //     $arr2 = array('dele-t-e','upda-t-e','inse-r-t','sele-c-t');
    //     $value = str_ireplace($arr1, $arr2, $value);
    // }
}


// xss过滤
// test case :
// <img src="x"/**/onerror=javascript:alert("XSS")>
// oxen%22%3E%3Ciframe%20onload=alert(5)%3E
// <IMG SRC=&#X40&#X61&#X76&#X61&#X73&#X63&#X72&#X69&#X70&#X74&#X3A&#X61&#X6C&#X65&#X72&#X74&#X28&#X27&#X58&#X53&#X53&#X27&#X29>
function remove_xss($val) {
        replace_non_printable_chars($val);
        // now the only remaining whitespace attacks are \t, \n, and \r
        $ra1 = array('alert', 'javascript', 'vbscript', 'expression', 'applet', 'meta', 'xml', 'blink', 'link', 'style', 'script', 'embed', 'object', 'iframe', 'frame', 'frameset', 'ilayer', 'layer', 'bgsound', 'title', 'base');
        $ra2 = array('onabort', 'onactivate', 'onafterprint', 'onafterupdate', 'onbeforeactivate', 'onbeforecopy', 'onbeforecut', 'onbeforedeactivate', 'onbeforeeditfocus', 'onbeforepaste', 'onbeforeprint', 'onbeforeunload', 'onbeforeupdate', 'onblur', 'onbounce', 'oncellchange', 'onchange', 'onclick', 'oncontextmenu', 'oncontrolselect', 'oncopy', 'oncut', 'ondataavailable', 'ondatasetchanged', 'ondatasetcomplete', 'ondblclick', 'ondeactivate', 'ondrag', 'ondragend', 'ondragenter', 'ondragleave', 'ondragover', 'ondragstart', 'ondrop', 'onerror', 'onerrorupdate', 'onfilterchange', 'onfinish', 'onfocus', 'onfocusin', 'onfocusout', 'onhelp', 'onkeydown', 'onkeypress', 'onkeyup', 'onlayoutcomplete', 'onload', 'onlosecapture', 'onmousedown', 'onmouseenter', 'onmouseleave', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'onmousewheel', 'onmove', 'onmoveend', 'onmovestart', 'onpaste', 'onpropertychange', 'onreadystatechange', 'onreset', 'onresize', 'onresizeend', 'onresizestart', 'onrowenter', 'onrowexit', 'onrowsdelete', 'onrowsinserted', 'onscroll', 'onselect', 'onselectionchange', 'onselectstart', 'onstart', 'onstop', 'onsubmit', 'onunload', 'confirm', 'eval', 'document');
        $ra = array_merge($ra1, $ra2);
        $found = true; // keep replacing as long as the previous round replaced something
        while ($found == true) {
            $val_before = $val;
            for ($i = 0;$i < sizeof($ra);$i++) {
                $pattern = '/';
                for ($j = 0;$j < strlen($ra[$i]);$j++) {
                    if ($j > 0) {
                        $pattern.= '(';
                        $pattern.= '(&#[x|X]0{0,8}([9][a][b]);?)?';
                        $pattern.= '|(&#0{0,8}([9][10][13]);?)?';
                        $pattern.= ')?';
                    }
                    $pattern.= $ra[$i][$j];
                }
                $pattern.= '/i';
                $replacement = substr($ra[$i], 0, 2) . '<x>' . substr($ra[$i], 2); // add in <> to nerf the tag
                $val = preg_replace($pattern, $replacement, $val); // filter out the hex tags
                if ($val_before == $val) {
                    // no replacements were made, so exit the loop
                    $found = false;
                }
            }
        }
        return $val;
    }

// 去除不可打印字符、Unicode替换等
function replace_non_printable_chars(&$val) {

        // remove all non-printable characters. CR(0a) and LF(0b) and TAB(9) are allowed
        // this prevents some character re-spacing such as <java\0script>
        // note that you have to handle splits with \n, \r, and \t later since they *are* allowed in some inputs
        $val = preg_replace('/([\x00-\x08][\x0b-\x0c][\x0e-\x20])/', '', $val);
        $val = addslashes($val); //防止unicode跨站脚本攻击
        // straight replacements, the user should never need these since they're normal characters
        // this prevents like <IMG SRC=&#X40&#X61&#X76&#X61&#X73&#X63&#X72&#X69&#X70&#X74&#X3A&#X61&#X6C&#X65&#X72&#X74&#X28&#X27&#X58&#X53&#X53&#X27&#X29>
        $search = 'abcdefghijklmnopqrstuvwxyz';
        $search .= 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $search .= '1234567890!@#$%^&*()';
        $search .= '~`";:?+/={}[]-_|\'\\';
        for ($i = 0;$i < strlen($search);$i++) {
            // ;? matches the ;, which is optional
            // 0{0,7} matches any padded zeros, which are optional and go up to 8 chars
            // &#x0040 @ search for the hex values
            $val = preg_replace('/(&#[x|X]0{0,8}' . dechex(ord($search[$i])) . ';?)/i', $search[$i], $val); // with a ;
            // &# @ 0{0,7} matches '0' zero to seven times
            $val = preg_replace('/(&#0{0,8}' . ord($search[$i]) . ';?)/', $search[$i], $val); // with a ;
            
        }
    }