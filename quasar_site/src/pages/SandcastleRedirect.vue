<template>
  <div class="fixed-center text-center">
    <p class="text-faded">
      Sandcastle... <strong>(404)</strong>
      <!-- <br/><br/>
      {{this.$route.path}} → <a :href="p">{{p}}</a> -->
    </p>

  </div>
</template>

<script>
export default {
  name: 'SandcastleRedirect',
  created () {
    let ref = this.$route.params.ref
    if (ref.endsWith('.htm')) {
      ref = ref.slice(0, -4)
    } else {
      return ref
    }

    const r = ref.split('_')
    let t

    switch (r[0]) {
      case 'T': // T_Rhino_AngleUnitSystem.htm
      case 'N': // N_Rhino.htm
        t = r.slice(1).join('.')
        break
      case 'P': // P_Rhino_ApplicationSettings_AppearanceSettingsState_CommandPromptBackgroundColor.htm
      case 'M': // M_Rhino_ApplicationSettings_AppearanceSettings_GetCurrentState.htm
      case 'E': // E_Rhino_Commands_Command_BeginCommand.htm
      case 'Overload': // Overload_Rhino_ApplicationSettings_AppearanceSettings_SetPaintColor.htm
        t = r.slice(1, -1).join('.')
        break
      case 'Methods': // Methods_T_Rhino_ApplicationSettings_AppearanceSettings.htm
      case 'Properties': // Properties_T_Rhino_ApplicationSettings_AppearanceSettings.htm
      case 'Events': // Events_T_Rhino_Commands_Command.htm
      case 'Operators': // Operators_T_Rhino_Display_Color4f.htm
        t = r.slice(2).join('.')
        break
      default:
        // F_Rhino_FileIO_DracoCompressionOptions_IncludeNormals.htm // <--- the field name might include underscores
        // Fields_T_Rhino_FileIO_DracoCompressionOptions.htm
        // GeneralError.htm
        // PageNotFound.htm
        // R_Project_RhinoCommon.htm
        t = ''
        break
    }

    // console.log(this.$route)
    const base = this.$route.fullPath
    let p = base.split('/').slice(0, -2).join('/') + '/' + t
    p = p.toLowerCase()

    this.$router.push(p)

    // return {
    //   t: t,
    //   p: p
    // }
  }
}
</script>
