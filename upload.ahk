If WinExist("ahk_exe hackmud_win.exe")
{
    WinActivate ahk_exe hackmud_win.exe
    Send {Raw}# 
    Send up script {Enter}
}
Exit