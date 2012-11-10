# encoding: utf-8

import time, httplib, string, ast
# Imports the monkeyrunner modules used by this program
from com.android.monkeyrunner import MonkeyRunner, MonkeyDevice
from cc.iqa.iquery.mr import QueryableDevice, By

ACTIVITY_LAUNCH_TIME = 10
THINK_TIME = 3

runComponent = "com.dianping.v1/com.dianping.ui.activity.MainActivity"

# Connects to the current device, returning a MonkeyDevice object
device = MonkeyRunner.waitForConnection()

# Installs the Android package. Notice that this method returns a boolean, so you can test
# to see if the installation worked.
if device:
    try:
        device.startActivity(component=runComponent)
        time.sleep(ACTIVITY_LAUNCH_TIME)
       
        # 从device变量里初始化支持iQuery查询的device对象，其源码位置是：
        # https://github.com/vowei/iQuery/blob/master/java/iquery/iquery-mr/src/main/java/cc/iqa/iquery/mr/QueryableDevice.java
        qdevice = QueryableDevice(device)
        # 启动并链接到安卓设备上的View Server，“127.0.0.1”这个ip是针对模拟器的，
        # 需要自己查询真机设备的ip
        qdevice.connectViewServer("127.0.0.1", 4939)
        
        # 获取待测应用的控件树结构，得到一个ControlHierarchy对象，其源码位置是：
        # https://github.com/vowei/iQuery/blob/master/java/iquery/iquery-mr/src/main/java/cc/iqa/iquery/mr/ControlHierarchy.java
        ch = qdevice.getLayout(qdevice.getActivityId(runComponent))
        # mText是按钮、文本框等控件的文本属性，与android sdk里各控件里的变量一致。
        # 下面touch函数里，第一个参数就是由By类创建的iquery查询，
        # 第二个参数就是待测应用的控件树结构，可以调用 ch.getViewServerOutput() 函数来获取一个字符串数组形式的待测应用控件树结构。
        # 第三个参数就是点击操作的具体行为。
        qdevice.touch(By.iquery(u":first >> [mText='团购']"), ch, MonkeyDevice.DOWN_AND_UP)
        time.sleep(THINK_TIME)    
        qdevice.touch(By.iquery(u":first >> [mText='签到']"), ch, MonkeyDevice.DOWN_AND_UP)
        time.sleep(THINK_TIME)    
        qdevice.touch(By.iquery(u":first >> [mText='我的']"), ch, MonkeyDevice.DOWN_AND_UP)
        time.sleep(THINK_TIME)    
    except Exception, e:
        print u'在运行过程中出现严重错误，错误消息是：'
        print e
        print '-----------------------------------------------'
        pass
