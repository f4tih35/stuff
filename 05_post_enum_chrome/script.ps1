$link = Read-Host -Prompt "Enter link "
$index = Read-Host -Prompt "Enter number "
$crop = ($link) -replace '\D+(\d+)','$1'

$num = [int]$crop.Trim('/')

$newlink = $link.Trim($crop).TrimEnd('/')

for($i = 0; $i -lt $index; $i++){
    $url = $newlink + "/" + ($num + $i)
	try {
	  $chrome = (Get-ItemProperty 'HKCU:\SOFTWARE\Microsoft\Windows\CurrentVersion\App Paths\chrome.exe').'(Default)'
	  Start-Process "$chrome" $url
	}
	catch {
	  Start-Process $url
	}
}