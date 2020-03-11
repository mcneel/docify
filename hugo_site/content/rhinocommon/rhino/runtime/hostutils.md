---
title: "HostUtils"
date: 2020-03-11 15:29:43Z
draft: false
---

*Namespace: [Rhino.Runtime](../)*

Contains static methods to deal with teh runtime environment.
```cs
public class HostUtils
```

static OnExceptionReport
: Is raised when an exception is reported with one of the  method.

static OnSendLogMessageToCloud
: Is raised when an exception is reported with one of the  method.
: since 6.4
## Properties

static string ComputerSerialNumber
: Gets the serial number of the computer running Rhino.
: since 6.0

static uint CurrentOSLanguage
: Get the current operating system language.
: Returns - A Windows LCID (on Windows and macOS).  On Windows, this will be 
     LCID value regardless of those languages that Rhino supports.  On macOS, this only
     returns LCID values for languages that Rhino does support.
: since 6.8

static Guid DeviceId
: The DeviceId is a unique, stable ID that anonymously identifies the device
     that Rhino is running on. It is computed based on hardware information that
     should not change when the OS is upgraded, or if commonly modified hardware
     are added or removed from the computer. The machine-specific information is
     hashed using a cryptographic hash to make it anonymous.
: since 6.0

static string DeviceName
: Name of the computer running Rhino. If the computer is part of a
     Windows Domain, the computer name has "@[DOMAIN]" appended.
: since 6.0

static string OperatingSystemBuildNumber
: Returns Operating System Build Number "11763" | "7601" | ... | "Unknown"
: since 6.15

static string OperatingSystemEdition
: Returns Operating System Edition: "Professional" | "ServerDatacenter" | ... | "Unknown"
: since 6.15

static string OperatingSystemInstallationType
: Returns Operating System Installation Type: "Client" | "Server" | "Unknown"
: since 6.15

static string OperatingSystemProductName
: Returns Operating System Edition: "Professional" | "ServerDatacenter" | ... | "Unknown"
: since 6.15

static string OperatingSystemVersion
: Returns Operating System Version "6.1" | "6.3" | ... | "Unknown"
: since 6.15

static bool RunningInDarkMode
: Returns True if the host operating system is in dark mode and Rhino
     supports dark mode.
: since 6.19

static bool RunningInMono
: Tests if this process is currently executing under the Mono runtime.

static bool RunningInRhino
: Tests if RhinoCommon is currently executing inside of the Rhino.exe process.
     There are other cases where RhinoCommon could be running; specifically inside
     of Visual Studio when something like a windows form is being worked on in the
     resource editor or running stand-alone when compiled to be used as a version
     of OpenNURBS.

static bool RunningOnOSX
: Tests if this process is currently executing on the Mac OSX platform.

static bool RunningOnWindows
: Tests if this process is currently executing on the Windows platform.

static bool SendDebugToCommandLine
: Gets or sets whether debug messages are printed to the command line.
## Methods

static string AutoInstallPlugInFolder(bool currentUser)
: Gets the auto install plug-in folder for machine or current user.
: Returns - The full path to the revelant auto install plug-in directory.
: since 6.0

static int CallFromCoreRhino(string task)
: Don't change this function in ANY way unless you chat with Steve first!
     This function is called by Rhino on initial startup and the signature
     must be exact
: since 6.0

static bool CheckForRdk(bool throwOnFalse,bool usePreviousResult)
: Determines if the RDK is loaded.
: Returns - True if the RDK is loaded; False if the RDK is not loaded. Note that the
      will hinder the retrieval of any return value.

static void ClearFpuExceptionStatus()
: Clear FPU exception and busy flags (Intel assembly fnclex)
: since 6.0

static int CreateCommands(IntPtr pPlugIn,Assembly pluginAssembly)
: Parses a plugin and create all the commands defined therein.
: Returns - The number of newly created commands.

static void CreateCommands(PlugIn plugin)
: Parses a plugin and create all the commands defined therein.

static [PlugIn](/rhinocommon/rhino/plugins/plugin/) CreatePlugIn(Type pluginType,bool printDebugMessages)
: Instantiates a plug-in type and registers the associated commands and classes.
: Returns - A new plug-in instance.

static string DebugDumpToString(BezierCurve bezierCurve)
: Gets the debug dumps. This is a text description of the geometric contents.
     DebugDump() is intended for debugging and is not suitable for creating high
     quality text descriptions of an object.
: Returns - A debug dump text.

static string DebugDumpToString(GeometryBase geometry)
: Gets the debug dumps. This is a text description of the geometric contents.
     DebugDump() is intended for debugging and is not suitable for creating high
     quality text descriptions of an object.
: Returns - A debug dump text.

static void DebugString(string msg)
: Prints a debug message to the Rhino Command Line.
     The message will only appear if the SendDebugToCommandLine property is set to true.

static void DebugString(string format,object[] args)
: Prints a debug message to the Rhino Command Line.
     The message will only appear if the SendDebugToCommandLine property is set to true.

static void DisplayOleAlerts(bool display)
: Defines if Ole alerts ("Server busy") alerts should be visualized.
     This function makes no sense on Mono.

static void ExceptionReport(Exception ex)
: Informs RhinoCommon of an exception that has been handled but that the developer wants to screen.

static void ExceptionReport(string source,Exception ex)
: Informs RhinoCommon of an exception that has been handled but that the developer wants to screen.

static void ExecuteNamedCallback(string name,NamedParametersEventArgs args)
: Execute a named callback
: since 7.0

static bool FileNameEndsWithRhinoBackupExtension(string fileName)
: Strip file extension from file name and check to see if it is a valid
     Rhino backup file extension.
: Returns - Returns True if the file name has an extension like 3dmbak.
: since 6.0

static bool FileNameEndsWithRhinoExtension(string fileName)
: Strip file extension from file name and check to see if it is a valid
     Rhino file extension.
: Returns - Returns True if the file name has an extension like 3dm.
: since 6.0

static bool GetAbsolutePath(string relativePath,bool bRelativePathisFileName,string relativeTo,bool bRelativeToIsFileName,string pathOut)
: Call this method to convert a relative path to an absolute path
     relative to the specified path.
: Returns - Returns True if parameters are valid and lpsRelativePath is indeed
     relative to lpsRelativeTo otherwise returns false
: since 6.0

static IEnumerable<System.IO.DirectoryInfo> GetActivePlugInVersionFolders(bool currentUser)
: Recurses through the auto install plug-in folders and returns the directories containing "active" versions of plug-ins.
: since 6.0

static string[] GetAssemblySearchPaths()
: Returns list of directory names where additional assemblies (plug-ins, DLLs, Grasshopper components)
     may be located

static void GetCurrentProcessInfo(string processName,Version processVersion)
: Returns information about the current process. If Rhino is the top level process,
     processName is "Rhino". Otherwise, processName is the name, without extension, of the main
     module that is executing. For example, "compute.backend" or "Revit".
     
     processVersion is the System.Version of the running process. It is the FileVersion
     of the executable.
: since 6.15

static Tuple<string, Type>[] GetCustomComputeEndpoints()
: Used by compute to define custom endpoints
: since 7.0

static T GetPlatformService(string assemblyPath,string typeFullName)
: For internal use only. Loads an assembly for dependency injection via IPlatformServiceLocator.
: Returns - An instance, or null.
: since 6.0

static System.Reflection.Assembly GetRhinoDotNetAssembly()
: Only works on Windows. Returns None on Mac.
: Returns - An assembly.

static void InitializeRhinoCommon()
: Makes sure all static RhinoCommon components is set up correctly.
     This happens automatically when a plug-in is loaded, so you probably won't
     have to call this method.

static void InitializeRhinoCommon_RDK()
: Makes sure all static RhinoCommon RDK components are set up correctly.
     This happens automatically when the RDK is loaded, so you probably won't
     have to call this method.
: since 6.0

static void InitializeZooClient()
: Initializes the ZooClient and Rhino license manager, this should get
     called automatically when RhinoCommon is loaded so you probably won't
     have to call this method.
: since 5.6

static void InPlaceConstCast(GeometryBase geometry,bool makeNonConst)
: DO NOT USE UNLESS YOU ARE CERTAIN ABOUT THE IMPLICATIONS.
     This is an expert user function which should not be needed in most
     cases. This function is similar to a const_cast in C++ to allow an object
     to be made temporarily modifiable without causing RhinoCommon to convert
     the class from const to non-const by creating a duplicate.You must call this function with a True parameter, make your
     modifications, and then restore the const flag by calling this function
     again with a False parameter. If you have any questions, please
     contact McNeel developer support before using!

static bool IsManagedDll(string path)
: Inspects a dll to see if it is compiled as native code or as a .NET assembly
: since 6.0

static bool IsRhinoBackupFileExtension(string fileExtension)
: Check to see if the file extension is a valid Rhino file extension.
: Returns - Return True if fileExtension is ".3dmbak", "3dmbak", ".3dm.bak", "3dm.bak",
     ".3dx.bak" or "3dx.bak", ignoring case.
: since 6.0

static bool IsRhinoFileExtension(string fileExtension)
: Check to see if the file extension is a valid Rhino file extension.
: Returns - Returns True if fileExtension is ".3dm", "3dm", ".3dx" or "3dx",
     ignoring case.
: since 6.0

static void RecordInitInstanceTime(string description)
: Used to help record times at startup with the -stopwatch flag to help
     determine bottlenecks in start up speed
: since 6.0

static void RegisterComputeEndpoint(string endpointPath,Type t)
: Register a class that can participate as a compute endpoint
: since 7.0

static bool RegisterDynamicCommand(PlugIn plugin,Command cmd)
: Adds a new dynamic command to Rhino.
: Returns - True on success, False on failure.

static void RegisterNamedCallback(string name,EventHandler<NamedParametersEventArgs> callback)
: Register a named callback
: since 6.15

static void RhinoCommonExceptionHandler(string title,object sender,Exception ex)
: For internal use only!!!
     Unhanded exception handler, writes stack trace to RhinoDotNet.txt file
: since 6.0

static void SendLogMessageToCloudCallbackProc(LogMessageType msg_type,IntPtr pwStringClass,IntPtr pwStringDesc,IntPtr pwStringMessage)
: Informs RhinoCommon of an message that has been handled but that the developer wants to screen.
: since 6.4

static void SetInShutDown()
: Informs the runtime that the application is shutting down.

static void ShutDownRhinoCommon_RDK()
: Makes sure all static RhinoCommon RDK components are de-initialized so they aren't calling into space when the RDK is unloaded.
: since 6.0

static void UnhandledThreadException(object sender,ThreadExceptionEventArgs e)
: Exception handler for exceptions occurring on the UI thread
: since 6.0
