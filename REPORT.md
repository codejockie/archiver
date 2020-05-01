## Report

### Date Picker
I created a date picker using a third party library V-Calendar. It was challenging using that as it was my first time using it. When I initially worked on this, the date picker did not render correctly when selecting date range but soon after I fixed it.
In wide screen, the date picker renders two months, while in a small screen it renders a single month.

### Mail List
I made several changes in the process building out the desktop version of the mail list. I hade initially used a table for rendering but had to change it to a grid style in order to support inspecting the mail body. When I used a table, the inspection of the body was done using a tooltip but that did not allow for multiple inspections of different mails at the same time.

While switching to the grid list, I refactored the code so as to modularise the code. By so doing I created the `Badge`, `ListHeader`, `GridList`, `MobileList` and `Mails` components.

+ The `Badge` component renders the email count, used by `GridList` and `MobileList`
+ The `ListHeader` component renders the header for mail list. It takes in props like `grid` and `mobile` and returns header matching the specific prop passed.
+ `GridList` component uses grid to render each mail in a list view.
+ `MobileList` renders a mobile friendly list view.
+ `Mails` is a container that houses the `ListHeader`, `GridList`, and `MobileList`.