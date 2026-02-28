# AnaM3ak — Firebase Dossier

## فيه:
- OTP (Phone Auth)
- رفع صور (Storage) + Rules
- Requests + Accept/Done (Firestore)
- Rating بعد DONE (Token)
- Cloud Functions: Token trigger + CMI scaffold

## Setup
1) firebase login
2) Firebase Console:
   - Enable Phone Auth
   - Create Firestore + Storage
   - Web App config -> حطو فـ public/firebase-config.js
3) firebase init (hosting+firestore+storage+functions)
4) firebase deploy

## Pages
- /index.html
- /login.html
- /pro-register.html
- /request.html
- /pro-dashboard.html
- /rate.html?rid=ID&t=TOKEN

## Verified
pros/{uid}.status = pending
بدّلها ل approved من Firestore باش تبان Verified.
