//
//  ViewController.m
//  Gestures
//
//  Created by John Ray on 9/7/11.
//  Copyright (c) 2011 John E. Ray. All rights reserved.
//

#import "BasicGestureViewController.h"

#define kOriginWidth 125.0
#define kOriginHeight 115.0
#define kOriginX 100.0
#define kOriginY 330.0

@implementation BasicGestureViewController
@synthesize outputLabel;
@synthesize imageView;


- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Release any cached data, images, etc that aren't in use.
}

#pragma mark - View lifecycle

- (void)viewDidLoad
{
    [super viewDidLoad];
	// Do any additional setup after loading the view, typically from a nib.
}

- (void)viewDidUnload
{
    [self setOutputLabel:nil];
    [self setImageView:nil];
    [super viewDidUnload];
    // Release any retained subviews of the main view.
    // e.g. self.myOutlet = nil;
}

- (void)viewWillAppear:(BOOL)animated
{
    [super viewWillAppear:animated];
}

- (void)viewDidAppear:(BOOL)animated
{
    [self becomeFirstResponder];
    [super viewDidAppear:animated];
}

- (void)viewWillDisappear:(BOOL)animated
{
	[super viewWillDisappear:animated];
}

- (void)viewDidDisappear:(BOOL)animated
{
	[super viewDidDisappear:animated];
}

- (BOOL)shouldAutorotateToInterfaceOrientation:(UIInterfaceOrientation)interfaceOrientation
{
    // Return YES for supported orientations
    return (interfaceOrientation != UIInterfaceOrientationPortraitUpsideDown);
}

- (IBAction)foundTap:(id)sender {
    self.outputLabel.text=@"Tapped";
}

- (IBAction)foundSwipe:(id)sender {
    self.outputLabel.text=@"Swiped";
}

- (IBAction)foundPinch:(id)sender {
    UIPinchGestureRecognizer *recognizer;
    NSString *feedback;
    double scale;
    
    recognizer=(UIPinchGestureRecognizer *)sender;
    scale=recognizer.scale;
    self.imageView.transform = CGAffineTransformMakeRotation(0.0);
    feedback=[[NSString alloc] 
              initWithFormat:@"Pinched, Scale:%1.2f, Velocity:%1.2f",
              recognizer.scale,recognizer.velocity];
    self.outputLabel.text=feedback;
    self.imageView.frame=CGRectMake(kOriginX,
                               kOriginY,
                               kOriginWidth*scale,
                               kOriginHeight*scale);
}

- (IBAction)foundRotation:(id)sender {
    UIRotationGestureRecognizer *recognizer;
    NSString *feedback;
    double rotation;
    
    recognizer=(UIRotationGestureRecognizer *)sender;
    rotation=recognizer.rotation;
    feedback=[[NSString alloc] 
              initWithFormat:@"Rotated, Radians:%1.2f, Velocity:%1.2f",
              recognizer.rotation,recognizer.velocity];
    self.outputLabel.text=feedback;
    self.imageView.transform = CGAffineTransformMakeRotation(rotation);
}

- (BOOL)canBecomeFirstResponder{
    return YES; 
}

- (void)motionEnded:(UIEventSubtype)motion withEvent:(UIEvent *)event {
    if (motion==UIEventSubtypeMotionShake) {
        self.outputLabel.text=@"Shaking things up!";
        self.imageView.transform = CGAffineTransformMakeRotation(0.0);
        self.imageView.frame=CGRectMake(kOriginX,
                                        kOriginY,
                                        kOriginWidth,
                                        kOriginHeight);
    }
}

@end
