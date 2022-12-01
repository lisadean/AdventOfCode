$file = "H:\Docs\@Inbox\puzzle.txt"
$input = (Get-Content $file).ToCharArray()
$answer = 0
for($i=0; $i -lt $input.Count -and $stop -ne $true; $i++){
    $item = $input[$i]
    if($item -eq ")"){$answer -= 1}
    if($item -eq "("){$answer += 1}
    if($answer -eq -1){
        $stop = $true
        $position = $i + 1
        }
    }

Write-Host "The answer is $answer"
Write-Host "The first basement position is $position"