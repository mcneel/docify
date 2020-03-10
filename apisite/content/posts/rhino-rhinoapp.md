---
title: "Rhino.RhinoApp"
date: 2020-03-10 09:24:55Z
draft: false
---

## static LicenseStateChanged
- (summary) 
     Fires when the license state has changed
     
- (since) 7.0
# Events
## static AppSettingsChanged
- (summary) 
     Is raised when settings are changed.
     
- (since) 5.0
## static Closing
- (summary) 
     Is raised when the application is about to close.
     
- (since) 5.0
## static EscapeKeyPressed
- (summary) 
     Can add or removed delegates that are raised when the escape key is clicked.
     
- (since) 5.0
## static Idle
- (summary) 
     Occurs when the application finishes processing and is about to enter the idle state
     
- (since) 5.1
## static Initialized
- (summary) 
     Is raised when the apllication is fully initialized.
     
- (since) 5.0
## static KeyboardEvent
- (summary) 
     Can add or removed delegates that are raised by a keyboard event.
     
- (since) 5.2
## static MainLoop
- (summary) 
     Gets called every loop iteration inside Rhino's main message loop.
     
- (since) 7.0
## static RdkCacheImageChanged
- (summary) 
     Monitors when the RDK thumbnail cache images are changed.
     
- (since) 5.1
## static RdkGlobalSettingsChanged
- (summary) 
     Monitors when RDK global settings are modified.
     
- (since) 5.1
## static RdkNewDocument
- (summary) 
     Monitors when RDK document information is rebuilt.
     
- (since) 5.1
## static RdkPlugInUnloading
- (summary) 
     Monitors when RDK client plugins are unloaded.
     
- (since) 5.1
## static RdkUpdateAllPreviews
- (summary) 
     Monitors when RDK thumbnails are updated.
     
- (since) 5.1
## static RendererChanged
- (summary) 
     Monitors when Rhino's current renderer changes.
     
- (since) 5.1
# Properties
## static DateTime BuildDate
- (summary) 
     Gets the build date.
     
- (since) 5.0
## static bool CanSave
- (summary) 
     Returns True when Rhino is allowed to save, False otherwise
     Conditions where Rhino is not allowed to save are: when evaluation licenses are expired;
     when a Cloud Zoo lease is expired; when a license is shared by a single user on multiple
     computers, and the current computer is not active.
     
- (since) 7.0
## static string CommandHistoryWindowText
- (summary) 
     Text in Rhino's command history window.
     
- (since) 5.0
## static CommandLineTextWriter CommandLineOut
- (summary) 
     Provides a TextWriter that can write to the command line.
     
- (since) 6.0
## static string CommandPrompt
- (summary) Rhino command prompt.
- (since) 5.0
## static bool CommandWindowCaptureEnabled
- (summary) 
     Enable or disable capturing of the strings sent to the CommandWindow through
     Write and WriteLine calls
     
- (since) 7.0
## static Guid CurrentRhinoId
- (summary) Gets the current ID of Rhino.
- (since) 5.0
## static int DaysUntilExpiration
- (summary) 
     Returns number of days until license expires. Zero when
       license is expired.
     Raises InvalidLicenseTypeException if LicenseExpires
     would return false.
     
- (since) 5.6
## static Font DefaultUiFont
- (summary) 
     Default font used to render user interface
     
- (since) 6.0
## static int ExeServiceRelease
- (summary) 
    Service release version of Rhino executable (0, 1, 2, ...)  
    The integer is the service release number of Rhino.  For example,
    this function returns "0" if Rhino V4SR0 is running and returns
    "1" if Rhino V4SR1 is running.
    
- (since) 5.0
## static int ExeVersion
- (summary) 
    Major version of Rhino executable 4, 5, ...
    
- (since) 5.0
## static Installation InstallationType
- (summary) Gets the product installation type, as seen in Rhino's ABOUT dialog box.
- (since) 5.0
## static string InstallationTypeString
- (summary) Gets the type of installation (product edition) of the license or lease.
- (since) 6.0
## static bool InvokeRequired
- (summary) 
     Returns True if we are currently not running on the main user interface thread
     
- (since) 6.0
## static bool IsClosing
- (summary) 
     Returns True if Rhino is in the process of closing, False otherwise.
     This can be True even before the Closing event fires, such as when RhinoDoc.CloseDocument event is called.
     
- (since) (unknown)
## static bool IsCloudZooNode
- (summary) 
     Returns 
       True if rhino is currently using the Cloud Zoo
       False otherwise
     
- (since) 6.0
## static bool IsExiting
- (summary) 
     Returns True if Rhino is in the process of exiting, False otherwise.
     This can be True even before the Closing event fires, such as when RhinoDoc.CloseDocument event is called.
     
- (since) (unknown)
## static bool IsInternetAccessAllowed
- (summary) 
     Returns True when Rhino is allowed to access the internet, False otherwise
     
- (since) 6.15
## static bool IsLicenseValidated
- (summary) 
     Returns 
       True if the license is validated
       False otherwise
     
- (since) 5.6
## static bool IsPreRelease
- (summary) 
     Returns
       True if Rhino is compiled a s Pre-release build (Beta, WIP)
       False otherwise
     
- (since) 6.0
## static bool IsRunningAutomated
- (summary) Is Rhino currently being executed through automation
- (since) 5.0
## static bool IsRunningHeadless
- (summary) Is Rhino currently being executed in headless mode
- (since) 6.1
## static bool IsSkinned
- (summary) 
     Is Rhino currently using custom, user-interface Skin.
     
- (since) 6.2
## static bool LicenseExpires
- (summary) 
     Returns 
       True if the license will expire
       False otherwise
     
- (since) 5.6
## static string LicenseUserName
- (summary) Gets the name of the user that owns the license or lease.
- (since) 6.0
## static string LicenseUserOrganization
- (summary) Gets the name of the organization of the user that owns the license or lease.
- (since) 6.0
## static System.Drawing.Image LoggedInUserAvatar
- (summary) 
     Returns the logged in user's avatar picture. 
     Returns a default avatar if the user does not have an avatar or if the avatar could not be fetched.
     
- (since) 6.0
## static string LoggedInUserName
- (summary) 
     Returns the name of the logged in user, or None if the user is not logged in.
     
- (since) 6.0
## static RhinoWindow MainApplicationWindow
- (summary) 
     Same as MainWindow function, but provides the concrete class instead of an interface
     
- (since) 5.0
## static string Name
- (summary) Gets the application name.
- (since) 5.0
## static LicenseNode NodeType
- (summary) Gets license the node type.
- (since) 5.0
## static Guid Rhino2Id
- (summary) Gets the ID of Rhino 2.
- (since) 5.0
## static Guid Rhino3Id
- (summary) Gets the ID of Rhino 3.
- (since) 5.0
## static Guid Rhino4Id
- (summary) Gets the ID of Rhino 4.
- (since) 5.0
## static Guid Rhino5Id
- (summary) Gets the ID of Rhino 5.
- (since) 5.0
## static Guid Rhino6Id
- (summary) Gets the ID of Rhino 6.
- (since) 7.0
## static string SchemeName
- (summary) 
     Gets the current Registry scheme name.
     
- (since) 6.0
## static int SdkServiceRelease
- (summary) 
    Rhino SDK 9 digit SDK service release number in the form YYYYMMDDn
    
    Service service release of the Rhino SDK supported by this executable. Rhino will only
    load plug-ins that require a service release of <= this release number.
    For example, SR1 will load all plug-ins made with any SDK released up through and including
    the SR1 SDK. But, SR1 will not load a plug-in built using the SR2 SDK. If an "old" Rhino
    tries to load a "new" plug-in, the user is told that they have to get a free Rhino.exe
    update in order for the plug-in to load. Rhino.exe updates are available from http://www.rhino3d.com.
    
- (since) 5.0
## static int SdkVersion
- (summary) 
    Rhino SDK 9 digit SDK version number in the form YYYYMMDDn
    
    Rhino will only load plug-ins that were build with exactly the
    same version of the SDK.
    
- (since) 5.0
## static string SerialNumber
- (summary) Gets the product serial number, as seen in Rhino's ABOUT dialog box.
- (since) 5.0
## static UI.ToolbarFileCollection ToolbarFiles
- (summary) 
     Collection of currently open toolbar files in the application
     
- (since) 5.0
## static int UpdatesAndStatisticsStatus
- (summary) 
     Returns True when Rhino is allowed to access the internet, False otherwise
     
- (since) 6.15
## static bool UserIsLoggedIn
- (summary) 
     Returns True if the user is logged in; else returns false.
     A logged in user does not guarantee that the auth tokens managed by the CloudZooManager instance are valid.
     
- (since) 6.0
## static int ValidationGracePeriodDaysLeft
- (summary) 
     Returns number of days within which validation must occur. Zero when
       validation grace period has expired.
     Raises InvalidLicenseTypeException if LicenseType is one of:
       EvaluationSaveLimited
       EvaluationTimeLimited
       Viewer
       Unknown
     
- (since) 5.6
## static Version Version
- (summary)  File version of the main Rhino process 
- (since) 5.9
## static string VersionControlRevision
- (summary) 
     McNeel version control revision identifier at the time this version
     of Rhino was built.
     
- (since) 5.0
# Methods
## static bool AskUserForRhinoLicense(bool standAlone,object parentWindow)
- (summary) 
     Display UI asking the user to enter a license for Rhino or use one from the Zoo.
     
- (since) 6.0
- (returns) bool This is some return comment
## static string[] CapturedCommandWindowStrings(bool clearBuffer)
- (summary) 
     Get list of strings sent to the command window through calls to Write or WriteLine
     when capturing has been enabled
     
- (since) 7.0
- (returns) string[] This is some return comment
## static bool ChangeLicenseKey(Guid pluginId)
- (summary) 
     Display UI asking the user to enter a license for the product specified by licenseId.
     
- (since) 6.0
- (returns) bool This is some return comment
## static void ClearCommandHistoryWindow()
- (summary) 
     Clear the text in Rhino's command history window.
     
- (since) 5.0
- (returns) void This is some return comment
## static void DisableContinuousMainLoop()
- (summary) 
     This function makes it so that Rhino's main loop is not executed continuously.
     This is default behavior.
     
- (since) 7.0
- (returns) void This is some return comment
## static bool EnableContinuousMainLoop()
- (summary) 
     This function makes it so that Rhino's main loop is executed continuously.
     This is useful when Rhino needs to be doing something as often as possible, 
     such as rendering a view at interactive frame rates.
     
- (since) 7.0
- (returns) bool This is some return comment
## static Commands.Result ExecuteCommand(RhinoDoc document,string commandName)
- (summary) 
     Execute a Rhino command.
     
- (since) 6.0
- (returns) Commands.Result This is some return comment
## static void Exit()
- (summary) Exits, or closes, Rhino.
- (since) 5.0
- (returns) void This is some return comment
## static string GetDataDirectory(bool localUser,bool forceDirectoryCreation)
- (summary) 
     Gets the data directory.
     
- (since) 6.0
- (returns) string This is some return comment
## static string GetDataDirectory(bool localUser,bool forceDirectoryCreation,string subDirectory)
- (summary) 
     Gets the data directory.
     
- (since) 6.0
- (returns) string This is some return comment
## static System.IO.DirectoryInfo GetExecutableDirectory()
- (summary) 
     directory
     
- (since) 6.7
- (returns) System.IO.DirectoryInfo This is some return comment
## static object GetPlugInObject(Guid pluginId)
- (summary) 
     Gets the object that is returned by PlugIn.GetPlugInObject for a given
     plug-in. This function attempts to find and load a plug-in with a given Id.
     When a plug-in is found, it's GetPlugInObject function is called and the
     result is returned here.
     Note the plug-in must have already been installed in Rhino or the plug-in manager
     will not know where to look for a plug-in with a matching id.
     
- (since) 5.0
- (returns) object This is some return comment
## static object GetPlugInObject(string plugin)
- (summary) 
     Gets the object that is returned by PlugIn.GetPlugInObject for a given
     plug-in. This function attempts to find and load a plug-in with a given name.
     When a plug-in is found, it's GetPlugInObject function is called and the
     result is returned here.
     Note the plug-in must have already been installed in Rhino or the plug-in manager
     will not know where to look for a plug-in with a matching name.
     
- (since) 5.0
- (returns) object This is some return comment
## static bool InFullScreen()
- (summary) 
     Verifies that Rhino is running in full screen mode. 
     
- (since) 6.0
- (returns) bool This is some return comment
## static void InvokeAndWait(Action action)
- (summary) 
     Work-In-Progess. Testing this with our unit test framework
     
- (since) 6.0
- (returns) void This is some return comment
## static void InvokeOnUiThread(Delegate method,object[] args)
- (summary) 
     Execute a function on the main UI thread.
     
- (since) 6.0
- (returns) void This is some return comment
## static bool IsInstallationBeta(Installation licenseType)
- (summary) 
     If licenseType is a beta license, returns true. A beta license grants
     full use of the product during the pre-release development period.
     
- (since) 5.6
- (returns) bool This is some return comment
## static bool IsInstallationCommercial(Installation licenseType)
- (summary) 
     If licenseType is a commercial license, returns true. A commercial license grants
     full use of the product.
     
- (since) 5.6
- (returns) bool This is some return comment
## static bool IsInstallationEvaluation(Installation licenseType)
- (summary) 
     If licenseType is an evaluation license, returns true. An evaluation license limits the ability of
     Rhino to save based on either the number of saves or a fixed period of time.
     
- (since) 5.6
- (returns) bool This is some return comment
## static bool LoginToCloudZoo()
- (summary) 
     Logs in to the cloud zoo.
     
- (since) 6.0
- (returns) bool This is some return comment
## static System.Windows.Forms.IWin32Window MainWindow()
- (summary)  Main Rhino Window 
- (since) 5.0
- (returns) System.Windows.Forms.IWin32Window This is some return comment
## static IntPtr MainWindowHandle()
- (summary) 
     Gets the HWND of the Rhino main window.
     
- (since) 5.0
- (returns) IntPtr This is some return comment
## static void OutputDebugString(string str)
- (summary) 
     Print a string to the Visual Studio Output window, if a debugger is attached.
    
     Note that the developer needs to add a newline manually if the next output should
     come on a separate line.
     
- (since) 6.0
- (returns) void This is some return comment
## static string ParseTextField(string formula,RhinoObject obj,RhinoObject topParentObject)
- (summary) 
- (since) 6.0
- (returns) string This is some return comment
## static bool RefreshRhinoLicense()
- (summary) 
     Refresh the license used by Rhino. This allows any part of Rhino to ensure that the most current version of the license file on disk is in use.
     
- (since) 6.0
- (returns) bool This is some return comment
## static bool ReleaseMouseCapture()
- (summary) Releases the mouse capture.
- (since) 5.0
- (returns) bool This is some return comment
## static bool RunMenuScript(string script)
- (summary) 
       Run a Rhino menu item script.  Will add the selected menu string to the MRU command menu.
     
- (since) 6.0
- (returns) bool This is some return comment
## static bool RunningInRdp()
- (summary) 
     Find out if Rhino is running in a remote session
     
- (since) 6.0
- (returns) bool This is some return comment
## static bool RunningOnVMWare()
- (summary) 
     Verifies that Rhino is running on VMWare
     
- (since) 6.0
- (returns) bool This is some return comment
## static bool RunScript(string script,bool echo)
- (summary) Runs a Rhino command script.
- (since) 5.0
- (returns) bool This is some return comment
## static bool RunScript(string script,string mruDisplayString,bool echo)
- (summary) Runs a Rhino command script.
- (since) 5.0
- (returns) bool This is some return comment
## static void SendKeystrokes(string characters,bool appendReturn)
- (summary) Sends a string of printable characters, including spaces, to Rhino's command line.
- (since) 5.0
- (returns) void This is some return comment
## static void SetCommandPrompt(string prompt)
- (summary) Set Rhino command prompt.
- (since) 5.0
- (returns) void This is some return comment
## static void SetCommandPrompt(string prompt,string promptDefault)
- (summary) Sets the command prompt in Rhino.
- (since) 5.0
- (returns) void This is some return comment
## static void SetCommandPromptMessage(string prompt)
- (summary) 
     Set the text that appears in the Rhino command prompt.
     In general, you should use the SetCommandPrompt functions. 
     In rare cases, like worker thread messages, the message that 
     appears in the prompt has non-standard formatting. In these 
     rare cases, SetCommandPromptMessage can be used to literally 
     specify the text that appears in the command prompt window.
     
- (since) 6.0
- (returns) void This is some return comment
## static void SetFocusToMainWindow()
- (summary) 
     Sets the focus to the main window. This function attempts to use the
     ActiveDoc on Mac to figure out which window to set focus to.
     
- (since) 5.0
- (returns) void This is some return comment
## static void SetFocusToMainWindow(RhinoDoc doc)
- (summary) 
     Sets the focus to the main windows for a given document
     
- (since) 6.16
- (returns) void This is some return comment
## static void Wait()
- (summary) 
     Pauses to keep Windows message pump alive so views will update
     and windows will repaint.
     
- (since) 5.0
- (returns) void This is some return comment
## static void Write(string message)
- (summary) Print formatted text in the command window.
- (since) 5.0
- (returns) void This is some return comment
## static void Write(string format,object arg0)
- (summary) Print formatted text in the command window.
- (since) 5.0
- (returns) void This is some return comment
## static void Write(string format,object arg0,object arg1)
- (summary) Print formatted text in the command window.
- (since) 5.0
- (returns) void This is some return comment
## static void Write(string format,object arg0,object arg1,object arg2)
- (summary) Print formatted text in the command window.
- (since) 5.0
- (returns) void This is some return comment
## static void WriteLine()
- (summary) Print a newline in the command window.
- (since) 5.0
- (returns) void This is some return comment
## static void WriteLine(string message)
- (summary) Print text in the command window.
- (since) 5.0
- (returns) void This is some return comment
## static void WriteLine(string format,object arg0)
- (summary) Print formatted text with a newline in the command window.
- (since) 5.0
- (returns) void This is some return comment
## static void WriteLine(string format,object arg0,object arg1)
- (summary) Print formatted text with a newline in the command window.
- (since) 5.0
- (returns) void This is some return comment
## static void WriteLine(string format,object arg0,object arg1,object arg2)
- (summary) Print formatted text with a newline in the command window.
- (since) 5.0
- (returns) void This is some return comment
