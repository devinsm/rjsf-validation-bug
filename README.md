# RSJF Validation Bug

To reproduce bug:

1. Enter 0 in "Magic Number" input (the form is now invalid)
1. Click "Submit" (it will fail since the form is invalid)
1. Change "Magic Number" back to 2 (the form is now valid)
1. Hit "Submit" again... no matter how many times you click it the UI still
   shows an error
