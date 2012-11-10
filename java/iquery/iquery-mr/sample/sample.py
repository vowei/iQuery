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
       
        qdevice = QueryableDevice(device)
        qdevice.connectViewServer("127.0.0.1", 4939)
        
        ch = qdevice.getLayout(qdevice.getActivityId(runComponent))
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
