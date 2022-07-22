# [Guía] Flash Official Firmware

En esta guía les mostraré cómo flashear el firmware oficial de nuestro dispositivo. Este proceso va a formatear su dispositivo, por lo que recomiendo realizar una copia de seguridad antes.
Todo esto es bajo su responsabilidad, no me hago responsable de ningún daño causado a su dispositivo.

## ¿Qué necesito?

- **SDK Platform tools**
  Las _SDK Platform tools de Android_ son un componente del SDK de Android. Incluyen herramientas que interactúan con la plataforma de Android, como [`adb`](https://developer.android.com/studio/command-line/adb), [`fastboot`](https://android.googlesource.com/platform/system/core/+/master/fastboot/#fastboot) y [`systrace`](https://developer.android.com/topic/performance/tracing/command-line). Estas herramientas son necesarias para el desarrollo de apps para Android, o bien si quieres desbloquear el bootloader de tu dispositivo y actualizarlo con una nueva imagen del sistema.
  Link de descarga - [SDK Platform Tools](https://developer.android.com/studio/releases/platform-tools)

- **Motorola Drivers**
  Esto contiene los drivers USB para que la PC pueda reconocer su dispositivo y trabajar con él cuándo esté en Bootloader o en Fastbootd.
  Link de descarga - [Motorola](https://motorola-global-es-latam.custhelp.com/app/answers/detail/a_id/89882)

- **Firmware Oficial**
  Usted va a requerir descargar firmware oficial correspondiente a su canal de software para su dispositivo, **NUNCA DESCARGUE UN FIRMWARE DE OTRO CANAL.** Para saber cuál es el firmware correspondiente a su dispositivo, tiene que fijarse en el canal al cual pertenece en la app de configuraciones, dentro del apartado "Acerca del teléfono" en "Canal de Software".
  Link de descarga - [Mirrors Lolinet](https://mirrors.lolinet.com/firmware/moto/astro/official/)

- **Windows Terminal (opcional)**
  Si usted tiene windows 8, 8.1 o 10, bájese de la tienda de Windows esta terminal, ya que va a obtener una función que va a necesitar en esta guía. Una vez obtenida la tienda, configure la misma para que el perfil predeterminado sea el símbolo del sistema (CMD).
  Link de descarga - [Microsoft Store](https://www.microsoft.com/store/productId/9N0DX20HK701)

- **Depuración USB (opcional)**
  En esta guía usaremos la depuración USB para acceder al modo bootloader, no es necesario si ya están en el modo bootloader o si van a acceder a este de otra forma (con una combinación de botones), pero recomiendo de la forma que se va a mostrar en esta guía.
  Para habilitar la depuración USB, usted tiene que ir a la app de configuraciones, en el apartado de "Acerca del teléfono" en "Número de compilación" y tocar 7 veces. Luego, tiene que acceder a las "Opciones para desarrolladores" en la app de configuraciones en el apartado "Sistema" y activar la "Depuración USB".

## Procedimiento para flashear el Firmware Stock

1. Descomprima la carpeta platform-tools que obtuvo desde la página **Android Developers**, luego descomprima la carpeta del firmware oficial obtenido de **Mirrors Lolinet** y mueva todos los archivos de esta carpeta a la carpeta platform-tools.

2. Si usted tiene la *Windows Terminal* obtenida desde la **Microsoft Store**, simplemente abra el CMD dentro de la carpeta haciendo clic secundario en una parte vacía de la carpeta y seleccionando la opción "Abrir en Terminal".
   Si usted no tiene la Windows Terminal, dentro de la carpeta en un espacio vacío haga shift+clic secundario y seleccione la opción "Abrir la ventana de PowerShell aquí", escriba `cmd` dentro de la ventana y presione enter.

3. Conecte el dispositivo a la PC, escriba en el CMD `adb devices` y presione enter.
   Si la consola no le devuelve
   
   ```CMD
   List of devices  attached
   ZE222BZWFF       device
   ```
   
   entonces asegúrese de que tenga conectado bien el dispositivo, o haya activado la depuración USB.

4. Ahora reinicie al bootloader con `adb reboot bootloader`, notará que se reinició en el bootloader, ya que este tiene una pantalla con texto y el robot de Android acostado con una tapa abierta.

5. Ahora ejecute los siguientes comandos (puede copiarlos todos y pegarlos en el CMD).
   
   ```CMD
   fastboot flash partition gpt.bin
   fastboot flash bootloader bootloader.img
   fastboot flash vbmeta_a vbmeta.img
   fastboot flash vbmeta_b vbmeta.img
   fastboot flash radio_a radio.img
   fastboot flash radio_b radio.img
   fastboot flash bluetooth_a BTFM.bin
   fastboot flash bluetooth_b BTFM.bin
   fastboot flash dsp_a dspso.bin
   fastboot flash dsp_b dspso.bin
   fastboot flash logo_a logo.bin
   fastboot flash logo_b logo.bin
   fastboot flash boot_a boot.img
   fastboot flash boot_b boot.img
   fastboot flash dtbo_a dtbo.img
   fastboot flash dtbo_b dtbo.img
   fastboot flash recovery_a recovery.img
   fastboot flash recovery_b recovery.img
   fastboot flash super super.img_sparsechunk.0
   fastboot flash super super.img_sparsechunk.1
   fastboot flash super super.img_sparsechunk.2
   fastboot flash super super.img_sparsechunk.3
   fastboot flash super super.img_sparsechunk.4
   fastboot flash super super.img_sparsechunk.5
   fastboot flash super super.img_sparsechunk.6
   fastboot flash super super.img_sparsechunk.7
   fastboot flash super super.img_sparsechunk.8
   fastboot flash super super.img_sparsechunk.9
   fastboot flash super super.img_sparsechunk.10
   fastboot flash super super.img_sparsechunk.11
   fastboot flash super super.img_sparsechunk.12
   fastboot flash super super.img_sparsechunk.13
   fastboot flash super super.img_sparsechunk.14
   fastboot flash super super.img_sparsechunk.15
   fastboot erase carrier
   fastboot erase userdata
   fastboot erase metadata
   fastboot erase ddr
   fastboot reboot
   ```
   
   Y con eso ya estaría flasheando el firmware oficial y se reiniciará automáticamente para su uso.

## Extra

- Si usted tiene el bootloader desbloqueado, no hace falta que siga el anterior procedimiento y simplemente puede ejecutar el siguiente [bat](https://forum.xda-developers.com/t/guide-one-fusion-xt2073-fastboot-flashing.4205723/) dentro de la carpeta platform-tools y este realizará todo por si solo.

Si tienen alguna duda, pasen por el grupo de Telegram de nuestro dispositivo "[Motorola One Fusion | Español™](https://t.me/MotorolaOneFusionES)".

*Saludos, atte. Syoker*
