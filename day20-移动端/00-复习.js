概念: 


屏幕相关

    屏幕尺寸:  手机屏幕对角线(单位是英寸)
    屏幕分辨率: 指屏幕上有多少个像素点    750(水平)*1334(垂直)
    屏幕的密度(dpi/ppi): 表示屏幕每英寸有多少个像素点

像素相关
    物理像素:   屏幕上发光的元器件
    css像素: 程序员写的像素  比如:  width:100px 
    设备独立像素: 出厂自带的一个参数(固定值) 决定了一个css像素,被几个物理像素渲染 
    像素比: 屏幕分辨率的水平值 / 设备独立像素的水平值  


图片高清显示: 
    位图: 是由位图像素组成. 会失真,但是色彩丰富
    矢量图: 是由点组成, 不会失真. 不适合做色彩丰富的图片
    问题: 在高清屏,位图会失真
    原因: 一个位图像素被多个物理像素渲染
    解决办法: 普通屏用正常图片,像素比为2的屏幕使用2倍图,像素比为3,用3倍图


移动端视口: 

    1. 布局视口  影响布局    默认的宽度 980px  document.documentElement.clientWidth

    2. 视觉视口  缩放时,放大或缩小的是视觉视口

    3. 理想视口  <meta name="viewport" content="width=device-width, inital-scale=1.0"> 

    当开启理想视口之后, 设备的布局视口的宽度就等于设备独立像素的宽度 

    scale = 设备独立像素的宽度  / 布局视口的宽度


适配: 
    1. viewport 适配:  <meta name="viewport" content="width=设计稿的宽度">  
    2. vw适配: 自己计算设计稿的设计值和设计稿宽度的比值.使用vw单位 
    3. rem适配
        方式一: 
           计算根标签字体的大小:  设备独立像素的宽度 * 100 / 设计稿的宽度
           写设计值的时候, 使用设计值 / 100 单位是rem

        方式二: 
            计算根标签字体的大小: 设备独立像素的宽度 / 10 
            写设计值的时候, 使用 设计值/ (设计稿的宽度 / 10) 
