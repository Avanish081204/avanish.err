@echo off
echo Committing and pushing portfolio changes...
git add .
git commit -m "Upgrade portfolio: fix chatbot typewriter, redesign profile card to Google-style centered layout, upgrade typography to Plus Jakarta Sans, and make header responsive on mobile"
git push
echo Done!
pause
