# Inject Scriptlink

$adminSite = "https://mytakeda-admin.sharepoint.com/"
$clSite = "https://mytakeda.sharepoint.com/sites/geos"

try {
    #$DenyAddAndCustomizePagesStatusEnum = [Microsoft.Online.SharePoint.TenantAdministration.DenyAddAndCustomizePagesStatus]

    #Connect-PnPOnline -Url $adminSite -UseWebLogin
    #$context = Get-PnPContext
    #$site = Get-PnPTenantSite -Detailed -Url $clSite

    #$site.DenyAddAndCustomizePages = $DenyAddAndCustomizePagesStatusEnum::Disabled

    #$site.Update()
    #$context.ExecuteQuery()

    Connect-PnPOnline -Url $clSite -UseWebLogin
    ## MUST LOAD IN SEQUENCE PLACE 0 TO AVOID ERROR
    Add-PnPJavaScriptLink -Name require -Url https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.min.js -Sequence 0 -Scope Site
    #Remove-PnPJavaScriptLink -Identity bootstrap -Scope Site
    Add-PnPJavaScriptLink -Name bootstrap -Url https://mytakedacdnvz.azureedge.net/library/globalnavclassic/1.0.0/globalnavclassic.js -Sequence 10 -Scope Site
}catch {
  Write-Error "Failed to authenticate to $siteUrl"
  Write-Error $_.Exception
}