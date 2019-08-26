# Version 1

#### Basic's
1. Rename Project from **gitexTaxi** to **truck.pe**
2. Src Folder Structuring [Minimizing page content load by creating component's, Sub Components, Sub Pages]
3. Src Folder Code Optimization
4. Images Optimization.
5. Responsive Design and Font
6. No absolute Path while importing component's. use babelrc root module configuration and refer to component folder just like
regular node_modules. ex: `import ComponentName from 'src/components/`
7. Remove Profile Link from drawer and add link to user Profile Picture at top of drawer.
8. Splash Screen

#### UX
1. Uber Vehicle Registration UI Integration
2. Quick Transportation UI Integration.
3. Smart Styles.
4. Connect `Pages/Support/Pages/Report` to **Support Drawer** in `Navigators/App#Support`
5. Connect `Pages/History/Pages/Description` to **Support Drawer** in `Navigators/App#History`
6. Animation, Transition's on screen's.


#### Libraries.
1. Redux
2. Prop Validation
3. Socket.io
4. Google Login **FB Login button will going to be replaced with Google+ Login in final Release**
5. Graphql


#### Known Bug's
1. While using glyph in <ButtonDark, <ButtonLink you have to pass padding through textStyle so that text gets
aligned with glyph in middle of button.
2. this.navigation.navigate.goBack() do work as expected in application. Fix application Navigation Bug's.
