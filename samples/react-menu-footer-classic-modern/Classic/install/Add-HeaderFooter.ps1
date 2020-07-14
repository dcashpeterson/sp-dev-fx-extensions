
[CmdletBinding()]
Param(
    [Parameter(Mandatory = $False, Position = 1)]
    [string]$Url,	

    [Parameter(ValueFromPipeline = $True)]
    [object]$Credentials
)

# If credentials were not provided, get them now
if ($Credentials -eq $null) {
    $Credentials = Get-Credential -Message "Enter Site Administrator Credentials"
}

Connect-PnPOnline -Url "https://derekcp.sharepoint.com/sites/PnPGlobalNavClassicTeam" -Credentials $Credentials

Write-Output "Script Links before:"
Get-PnPJavaScriptLink

Write-Output "`n`nAdding script links"
#Add-PnPJavaScriptLink -Name React -Url "https://cdnjs.cloudflare.com/ajax/libs/react/15.6.2/react.js" -Sequence 100
#Add-PnPJavaScriptLink -Name ReactDom -Url "https://cdnjs.cloudflare.com/ajax/libs/react-dom/15.6.2/react-dom.js" -Sequence 200
Add-PnPJavaScriptLink -Name Require -Url "https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.min.js" -Sequence 0 -Scope Site
# -- Update with the location of your webpack bundle --
#Add-PnPJavaScriptLink -Name HeaderFooter -Url "https://localhost:3010/dist/globalnavclassic.js" -Sequence 300
#Add-PnPJavaScriptLink -Name HeaderFooterCommon -Url "https://derekcp.sharepoint.com/sites/PnPGlobalNavModern/Style%20Library/reactglobalnavcommon.js" -Sequence 400
Add-PnPJavaScriptLink -Name HeaderFooter -Url "https://derekcp.sharepoint.com/sites/PnPGlobalNavModern/Style%20Library/globalnavclassic.js" -Sequence 10 -Scope Site
Write-Output "`n`nScript Links After:"
Get-PnPJavaScriptLink

Write-Output "`n`nDone"
