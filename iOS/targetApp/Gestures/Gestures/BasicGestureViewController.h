//
//  ViewController.h
//  Gestures
//
//  Created by John Ray on 9/7/11.
//  Copyright (c) 2011 John E. Ray. All rights reserved.
//

#import <UIKit/UIKit.h>

@interface BasicGestureViewController : UIViewController
@property (strong, nonatomic) IBOutlet UILabel *outputLabel;
@property (strong, nonatomic) IBOutlet UIImageView *imageView;

- (IBAction)foundTap:(id)sender;
- (IBAction)foundSwipe:(id)sender;
- (IBAction)foundPinch:(id)sender;
- (IBAction)foundRotation:(id)sender;


@end
