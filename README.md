# Reproducible crash repository

## Install

    yarn

## Run

    yarn ios

How I was able to reproduce the crash:

1. Use an iPad (any other iOS device should work)
2. Start the app on the Expo app on the iPad
3. Tap "Go to Camera screen"
4. Tap "Back"
5. Repeat steps 3 and 4 for about 10 times
6. The application crashes

## Notes

This app was generated by `expo init` and then changed to show the crash behavior. It still contains a large number of sub-optimal chunks of code, lot of them being likely unused.
