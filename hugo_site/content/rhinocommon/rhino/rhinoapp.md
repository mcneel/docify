---
title: "RhinoApp"
date: 2020-03-11 15:29:45Z
draft: false
---

*Namespace: [Rhino](../)*

.NET RhinoApp is parallel to C++ CRhinoApp.
```cs
public class RhinoApp
```

static LicenseStateChanged
: Fires when the license state has changed
: since 7.0
## Events

static AppSettingsChanged
: Is raised when settings are changed.

static Closing
: Is raised when the application is about to close.

static EscapeKeyPressed
: Can add or removed delegates that are raised when the escape key is clicked.

static Idle
: Occurs when the application finishes processing and is about to enter the idle state
: since 5.1

static Initialized
: Is raised when the apllication is fully initialized.

static KeyboardEvent
: Can add or removed delegates that are raised by a keyboard event.
: since 5.2

static MainLoop
: Gets called every loop iteration inside Rhino's main message loop.
: since 7.0

static RdkCacheImageChanged
: Monitors when the RDK thumbnail cache images are changed.
: since 5.1

static RdkGlobalSettingsChanged
: Monitors when RDK global settings are modified.
: since 5.1

static RdkNewDocument
: Monitors when RDK document information is rebuilt.
: since 5.1

static RdkPlugInUnloading
: Monitors when RDK client plugins are unloaded.
: since 5.1

static RdkUpdateAllPreviews
: Monitors when RDK thumbnails are updated.
: since 5.1

static RendererChanged
: Monitors when Rhino's current renderer changes.
: since 5.1
## Properties

static DateTime BuildDate
: Gets the build date.

static bool CanSave
: Returns True when Rhino is allowed to save, False otherwise
     Conditions where Rhino is not allowed to save are: when evaluation licenses are expired;
     when a Cloud Zoo lease is expired; when a license is shared by a single user on multiple
     computers, and the current computer is not active.
: since 7.0

static string CommandHistoryWindowText
: Text in Rhino's command history window.

static [CommandLineTextWriter](/rhinocommon/rhino/rhinoapp/commandlinetextwriter/) CommandLineOut
: Provides a TextWriter that can write to the command line.
: since 6.0

static string CommandPrompt
: Rhino command prompt.

static bool CommandWindowCaptureEnabled
: Enable or disable capturing of the strings sent to the CommandWindow through
     Write and WriteLine calls
: since 7.0

static Guid CurrentRhinoId
: Gets the current ID of Rhino.

static int DaysUntilExpiration
: Returns number of days until license expires. Zero when
       license is expired.
     Raises InvalidLicenseTypeException if LicenseExpires
     would return false.
: since 5.6

static [Font](/rhinocommon/rhino/docobjects/font/) DefaultUiFont
: Default font used to render user interface
: since 6.0

static int ExeServiceRelease
: Service release version of Rhino executable (0, 1, 2, ...)  
    The integer is the service release number of Rhino.  For example,
    this function returns "0" if Rhino V4SR0 is running and returns
    "1" if Rhino V4SR1 is running.

static int ExeVersion
: Major version of Rhino executable 4, 5, ...

static [Installation](/rhinocommon/rhino/applicationsettings/installation/) InstallationType
: Gets the product installation type, as seen in Rhino's ABOUT dialog box.

static string InstallationTypeString
: Gets the type of installation (product edition) of the license or lease.
: since 6.0

static bool InvokeRequired
: Returns True if we are currently not running on the main user interface thread
: since 6.0

static bool IsClosing
: Returns True if Rhino is in the process of closing, False otherwise.
     This can be True even before the Closing event fires, such as when RhinoDoc.CloseDocument event is called.
: since (unknown)

static bool IsCloudZooNode
: Returns 
       True if rhino is currently using the Cloud Zoo
       False otherwise
: since 6.0

static bool IsExiting
: Returns True if Rhino is in the process of exiting, False otherwise.
     This can be True even before the Closing event fires, such as when RhinoDoc.CloseDocument event is called.
: since (unknown)

static bool IsInternetAccessAllowed
: Returns True when Rhino is allowed to access the internet, False otherwise
: since 6.15

static bool IsLicenseValidated
: Returns 
       True if the license is validated
       False otherwise
: since 5.6

static bool IsPreRelease
: Returns
       True if Rhino is compiled a s Pre-release build (Beta, WIP)
       False otherwise
: since 6.0

static bool IsRunningAutomated
: Is Rhino currently being executed through automation

static bool IsRunningHeadless
: Is Rhino currently being executed in headless mode
: since 6.1

static bool IsSkinned
: Is Rhino currently using custom, user-interface Skin.
: since 6.2

static bool LicenseExpires
: Returns 
       True if the license will expire
       False otherwise
: since 5.6

static string LicenseUserName
: Gets the name of the user that owns the license or lease.
: since 6.0

static string LicenseUserOrganization
: Gets the name of the organization of the user that owns the license or lease.
: since 6.0

static Image LoggedInUserAvatar
: Returns the logged in user's avatar picture. 
     Returns a default avatar if the user does not have an avatar or if the avatar could not be fetched.
: since 6.0

static string LoggedInUserName
: Returns the name of the logged in user, or None if the user is not logged in.
: since 6.0

static [RhinoWindow](/rhinocommon/rhino/rhinowindow/) MainApplicationWindow
: Same as MainWindow function, but provides the concrete class instead of an interface

static string Name
: Gets the application name.

static [LicenseNode](/rhinocommon/rhino/applicationsettings/licensenode/) NodeType
: Gets license the node type.

static Guid Rhino2Id
: Gets the ID of Rhino 2.

static Guid Rhino3Id
: Gets the ID of Rhino 3.

static Guid Rhino4Id
: Gets the ID of Rhino 4.

static Guid Rhino5Id
: Gets the ID of Rhino 5.

static Guid Rhino6Id
: Gets the ID of Rhino 6.
: since 7.0

static string SchemeName
: Gets the current Registry scheme name.
: since 6.0

static int SdkServiceRelease
: Rhino SDK 9 digit SDK service release number in the form YYYYMMDDn
    
    Service service release of the Rhino SDK supported by this executable. Rhino will only
    load plug-ins that require a service release of <= this release number.
    For example, SR1 will load all plug-ins made with any SDK released up through and including
    the SR1 SDK. But, SR1 will not load a plug-in built using the SR2 SDK. If an "old" Rhino
    tries to load a "new" plug-in, the user is told that they have to get a free Rhino.exe
    update in order for the plug-in to load. Rhino.exe updates are available from http://www.rhino3d.com.

static int SdkVersion
: Rhino SDK 9 digit SDK version number in the form YYYYMMDDn
    
    Rhino will only load plug-ins that were build with exactly the
    same version of the SDK.

static string SerialNumber
: Gets the product serial number, as seen in Rhino's ABOUT dialog box.

static [ToolbarFileCollection](/rhinocommon/rhino/ui/toolbarfilecollection/) ToolbarFiles
: Collection of currently open toolbar files in the application

static int UpdatesAndStatisticsStatus
: Returns True when Rhino is allowed to access the internet, False otherwise
: since 6.15

static bool UserIsLoggedIn
: Returns True if the user is logged in; else returns false.
     A logged in user does not guarantee that the auth tokens managed by the CloudZooManager instance are valid.
: since 6.0

static int ValidationGracePeriodDaysLeft
: Returns number of days within which validation must occur. Zero when
       validation grace period has expired.
     Raises InvalidLicenseTypeException if LicenseType is one of:
       EvaluationSaveLimited
       EvaluationTimeLimited
       Viewer
       Unknown
: since 5.6

static Version Version
: File version of the main Rhino process
: since 5.9

static string VersionControlRevision
: McNeel version control revision identifier at the time this version
     of Rhino was built.
## Methods

static bool AskUserForRhinoLicense(bool standAlone,object parentWindow)
: Display UI asking the user to enter a license for Rhino or use one from the Zoo.
: since 6.0

static string[] CapturedCommandWindowStrings(bool clearBuffer)
: Get list of strings sent to the command window through calls to Write or WriteLine
     when capturing has been enabled
: Returns - array of captured strings
: since 7.0

static bool ChangeLicenseKey(Guid pluginId)
: Display UI asking the user to enter a license for the product specified by licenseId.
: Returns - True on success, False otherwise
: since 6.0

static void ClearCommandHistoryWindow()
: Clear the text in Rhino's command history window.

static void DisableContinuousMainLoop()
: This function makes it so that Rhino's main loop is not executed continuously.
     This is default behavior.
: since 7.0

static bool EnableContinuousMainLoop()
: This function makes it so that Rhino's main loop is executed continuously.
     This is useful when Rhino needs to be doing something as often as possible, 
     such as rendering a view at interactive frame rates.
: Returns - True if the functionality was enabled successfully, False otherwise.
: since 7.0

static Commands.Result ExecuteCommand(RhinoDoc document,string commandName)
: Execute a Rhino command.
: Returns - Returns the reult of the command.
: since 6.0

static void Exit()
: Exits, or closes, Rhino.

static string GetDataDirectory(bool localUser,bool forceDirectoryCreation)
: Gets the data directory.
: Returns - The data directory.
: since 6.0

static string GetDataDirectory(bool localUser,bool forceDirectoryCreation,string subDirectory)
: Gets the data directory.
: Returns - The data directory.
: since 6.0

static System.IO.DirectoryInfo GetExecutableDirectory()
: directory
: since 6.7

static object GetPlugInObject(Guid pluginId)
: Gets the object that is returned by PlugIn.GetPlugInObject for a given
     plug-in. This function attempts to find and load a plug-in with a given Id.
     When a plug-in is found, it's GetPlugInObject function is called and the
     result is returned here.
     Note the plug-in must have already been installed in Rhino or the plug-in manager
     will not know where to look for a plug-in with a matching id.
: Returns - Result of PlugIn.GetPlugInObject for a given plug-in on success.

static object GetPlugInObject(string plugin)
: Gets the object that is returned by PlugIn.GetPlugInObject for a given
     plug-in. This function attempts to find and load a plug-in with a given name.
     When a plug-in is found, it's GetPlugInObject function is called and the
     result is returned here.
     Note the plug-in must have already been installed in Rhino or the plug-in manager
     will not know where to look for a plug-in with a matching name.
: Returns - Result of PlugIn.GetPlugInObject for a given plug-in on success.

static bool InFullScreen()
: Verifies that Rhino is running in full screen mode.
: Returns - True if Rhino is running full screen, False otherwise.
: since 6.0

static void InvokeAndWait(Action action)
: Work-In-Progess. Testing this with our unit test framework
: since 6.0

static void InvokeOnUiThread(Delegate method,object[] args)
: Execute a function on the main UI thread.
: since 6.0

static bool IsInstallationBeta(Installation licenseType)
: If licenseType is a beta license, returns true. A beta license grants
     full use of the product during the pre-release development period.
: Returns - True if licenseType is a beta license. False otherwise
: since 5.6

static bool IsInstallationCommercial(Installation licenseType)
: If licenseType is a commercial license, returns true. A commercial license grants
     full use of the product.
: Returns - True if licenseType is a commercial license. False otherwise
: since 5.6

static bool IsInstallationEvaluation(Installation licenseType)
: If licenseType is an evaluation license, returns true. An evaluation license limits the ability of
     Rhino to save based on either the number of saves or a fixed period of time.
: Returns - True if licenseType is an evaluation license. False otherwise
: since 5.6

static bool LoginToCloudZoo()
: Logs in to the cloud zoo.
: since 6.0

static System.Windows.Forms.IWin32Window MainWindow()
: Main Rhino Window

static IntPtr MainWindowHandle()
: Gets the HWND of the Rhino main window.

static void OutputDebugString(string str)
: Print a string to the Visual Studio Output window, if a debugger is attached.
    
     Note that the developer needs to add a newline manually if the next output should
     come on a separate line.
: since 6.0

static string ParseTextField(string formula,RhinoObject obj,RhinoObject topParentObject)
: 
: since 6.0

static bool RefreshRhinoLicense()
: Refresh the license used by Rhino. This allows any part of Rhino to ensure that the most current version of the license file on disk is in use.
: since 6.0

static bool ReleaseMouseCapture()
: Releases the mouse capture.

static bool RunMenuScript(string script)
: Run a Rhino menu item script.  Will add the selected menu string to the MRU command menu.
: since 6.0

static bool RunningInRdp()
: Find out if Rhino is running in a remote session
: Returns - True if Rhino is running in a RDP session, False otherwise
: since 6.0

static bool RunningOnVMWare()
: Verifies that Rhino is running on VMWare
: Returns - True if Rhino is running in Windows on VMWare, False otherwise
: since 6.0

static bool RunScript(string script,bool echo)
: Runs a Rhino command script.

static bool RunScript(string script,string mruDisplayString,bool echo)
: Runs a Rhino command script.

static void SendKeystrokes(string characters,bool appendReturn)
: Sends a string of printable characters, including spaces, to Rhino's command line.

static void SetCommandPrompt(string prompt)
: Set Rhino command prompt.

static void SetCommandPrompt(string prompt,string promptDefault)
: Sets the command prompt in Rhino.

static void SetCommandPromptMessage(string prompt)
: Set the text that appears in the Rhino command prompt.
     In general, you should use the SetCommandPrompt functions. 
     In rare cases, like worker thread messages, the message that 
     appears in the prompt has non-standard formatting. In these 
     rare cases, SetCommandPromptMessage can be used to literally 
     specify the text that appears in the command prompt window.
: since 6.0

static void SetFocusToMainWindow()
: Sets the focus to the main window. This function attempts to use the
     ActiveDoc on Mac to figure out which window to set focus to.

static void SetFocusToMainWindow(RhinoDoc doc)
: Sets the focus to the main windows for a given document
: since 6.16

static void Wait()
: Pauses to keep Windows message pump alive so views will update
     and windows will repaint.

static void Write(string message)
: Print formatted text in the command window.

static void Write(string format,object arg0)
: Print formatted text in the command window.

static void Write(string format,object arg0,object arg1)
: Print formatted text in the command window.

static void Write(string format,object arg0,object arg1,object arg2)
: Print formatted text in the command window.

static void WriteLine()
: Print a newline in the command window.

static void WriteLine(string message)
: Print text in the command window.

static void WriteLine(string format,object arg0)
: Print formatted text with a newline in the command window.

static void WriteLine(string format,object arg0,object arg1)
: Print formatted text with a newline in the command window.

static void WriteLine(string format,object arg0,object arg1,object arg2)
: Print formatted text with a newline in the command window.
