//
//  AppDelegate.h
//  Gestures
//
//  Created by John Ray on 9/7/11.
//  Copyright (c) 2011 John E. Ray. All rights reserved.
//

#import <UIKit/UIKit.h>

#define kOriginWidth 123.0
#define kOriginHeight 112.0
#define kOriginX 98.0
#define kOriginY 328.0

@interface AppDelegate : UIResponder <UIApplicationDelegate>

@property (strong, nonatomic) UIWindow *window;

extern NSString *kUYLSettingsSpeedKey;
extern NSString *kUYLSettingsVolumeKey;
extern NSString *kUYLSettingsWarpDriveKey;
extern NSString *kUYLSettingsShieldsKey;
extern NSString *kUYLSettingsCreditsKey;
extern NSString *kUYLSettingsRetriesKey;

@end
