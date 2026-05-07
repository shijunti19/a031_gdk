# git-push.ps1
# 自动推送到 GitHub 并选择账户 2

# 1. 切换到项目目录
Set-Location "X:\xiaolu\gkd\a031_gdk"

# 2. 消除 "credential-manager-core is not a git command" 的干扰提示（可选）
# 如果全局配置了错误的管理器，可以临时移除它
git config --global --unset credential.helper 2>$null

# 3. 自动推送：输入 "2" 并回车，然后继续管道到 git push
# 注意：`"2\`n"` 中的 \`n 表示换行符，模拟按下回车
"2`n" | git push origin main 2>&1 | ForEach-Object {
    # 过滤掉 credential-manager-core 的错误信息（保留其他信息）
    if ($_ -notmatch "credential-manager-core") { Write-Output $_ }
}

# 4. 检查最后执行状态
if ($LASTEXITCODE -eq 0) {
    Write-Host "推送成功！" -ForegroundColor Green
} else {
    Write-Host "推送失败，请检查错误信息。" -ForegroundColor Red
}