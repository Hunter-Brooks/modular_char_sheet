# Frontend Git Push Script
Set-Location "c:\Users\Grand Nagus\Desktop\tutorial\modular-char-sheet"

Write-Host "=== Frontend Repository ===" -ForegroundColor Cyan
Write-Host "Current branch:" -ForegroundColor Yellow
git branch --show-current

Write-Host "`nChecking status..." -ForegroundColor Yellow
$status = git status --short
if ($status) {
    Write-Host "Changes detected:" -ForegroundColor Yellow
    git status --short
    
    Write-Host "`nStaging all changes..." -ForegroundColor Yellow
    git add -A
    
    Write-Host "`nCommitting changes..." -ForegroundColor Yellow
    git commit -m "chore: Update character sheet frontend"
    
    Write-Host "`nPushing to remote..." -ForegroundColor Yellow
    git push
    
    Write-Host "`n=== Frontend push complete! ===" -ForegroundColor Green
} else {
    Write-Host "No changes to commit in frontend repository" -ForegroundColor Green
}
