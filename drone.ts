enum MyEnumX {
    //% block="動かさない"
    NO_X = (0),
    //% block="前"
    FOWARD = (50),
    //% block="後"
    BACK = (-50),
}

enum MyEnumY {
    //% block="動かさない"
    NO_Y = (0),
    //% block="上"
    UP = (50),
    //% block="下"
    DOWN = (-50),
}

enum MyEnumZ {
    //% block="動かさない"
    NO_Z = (0),
    //% block="右"
    LIGHT = (-50),
    //% block="左"
    LEFT = (50)
}

/**
 * Custom blocks
 */
//% weight=0 color=#fc4c02 icon="\u26a1"
//% block="ドローン""
namespace Tello {
    /**
     * 通信グループの設定を行う．受信機と送信機のグループ設定は合わせてね
     * @param 通信グループの番号 value 1-100, eg: 1
     */
    //% block="無線グループの設定を行う %value"
    //% group="設定"
    export function radiosetgroup(value: number): void {
        radio.setGroup(value)
    }

    /**
     * スピードの設定を行う、20~50の間で設定する、1につき1cm進む！
     * @param スピードの設定を行う value 20-50, eg: 10
     */
    //% block="スピードを設定する(20~50まで:初期値は30) %value"
    //% group="設定"
    export function Setspped(value: number): void {
        if (value > 50) {
            value = 50
        }
        radio.sendString("speed=" + value)
    }

    /**
     * 送信間隔の設定を行う、「ずっと」で使う、100~10000の間で設定する、単位はミリ秒
     * @param 送信間隔の設定を行う value 100-10000, eg: 1000
     */
    //% block="送信間隔を設定する(ミリ秒) %value"
    //% group="設定"
    export function Setorder(value: number): void {
        if (command_enable == 0) {
            basic.pause(value)
            command_enable = 1
        }
    }

    /**
     * 受信機にドローンが上に上がる命令を送信する．
     * その時，距離も設定し送信を行う．
     * @param value 上に上がる距離を設定する(cm) value 20-500, eg: 20
     */
    //% block="うえに上がる %value"
    //% group="初心者向け"
    export function up(value: number): void {
        if (flying == 1 && command_enable == 1) {
            radio.sendString("up=" + value)
            flying = 1
            command_enable = 0
        }
    }

    /**
     * 受信機にドローンが下に下る命令を送信する．
     * その時，距離も設定し送信を行う．
     * @param value 下に下る距離を設定する（cm） value 20-500, eg: 20
     */
    //% block="したにさがる %value"
    //% group="初心者向け"
    export function down(value: number): void {
        if (flying == 1 && command_enable == 1) {
            radio.sendString("down=" + value)
            flying = 1
            command_enable = 0
        }
    }

    /**
     * 受信機にドローンが前に進む命令を送信する．
     * その時，距離も設定し送信を行う．
     * @param value 前に進む距離を設定する（cm） value 20-500, eg: 50
     */
    //% block="まえにすすむ %value"
    //% group="初心者向け"
    export function forward(value: number): void {
        if (flying == 1 && command_enable == 1) {
            radio.sendString("forward=" + value)
            flying = 1
            command_enable = 0
        }
    }

    /**
     * 受信機にドローンが後ろに下がる命令を送信する．
     * その時，距離も設定し送信を行う．
     * @param value 後ろに下がる距離を設定する（cm） value 20-500, eg: 50
     */
    //% block="うしろにさがる %value"
    //% group="初心者向け"
    export function back(value: number): void {
        if (flying == 1 && command_enable == 1) {
            radio.sendString("back=" + value)
            flying = 1
            command_enable = 0
        }
    }

    /**
     * 受信機にドローンが左に進む命令を送信する．
     * その時，距離も設定し送信を行う．
     * @param value 左にすすむ距離を設定する（cm） value 20-500, eg: 50
     */
    //% block="ひだりにすすむ %value"
    //% group="初心者向け"
    export function left(value: number): void {
        if (flying == 1 && command_enable == 1) {
            radio.sendString("left=" + value)
            flying = 1
            command_enable = 0
        }
    }

    /**
     * 受信機にドローンが右に進む命令を送信する．
     * その時，距離も設定し送信を行う．
     * @param value 右にすすむ距離を設定する（cm） value 20-500, eg: 50
     */
    //% block="みぎにすすむ %value"
    //% group="初心者向け"
    export function right(value: number): void {
        if (flying == 1 && command_enable == 1) {
            radio.sendString("right=" + value)
            flying = 1
            command_enable = 0
        }
    }

    /**
     * 受信機にドローンが時計回りを行う命令を送信する．
     * その時，角度を設定し送信を行う．
     * @param value 時計回りを行う角度を設定する(degrees clockwise) value 1-360, eg: 90
     */
    //% block="とけいまわり %value"
    //% group="初心者向け"
    export function rotate_cw(value: number): void {
        if (flying == 1 && command_enable == 1) {
            radio.sendString("cw=" + value)
            flying = 1
            command_enable = 0
        }
    }

    /**
     * 受信機にドローンが反時計回りを行う命令を送信する．
     * その時，角度を設定し送信を行う．
     * @param value 反時計回りを行う角度を設定する(degrees counterclockwise) value 1-360, eg: 90
     */
    //% block="はんとけいまわり %value"
    //% group="初心者向け"
    export function rotate_ccw(value: number): void {
        if (flying == 1 && command_enable == 1) {
            radio.sendString("ccw=" + value)
            flying = 1
            command_enable = 0
        }
    }

    /**
     * 受信機にドローンが飛行を開始する命令を送信する．
     */
    //% block="飛行を開始する"
    //% group="中級者向け"
    export function takeoff(): void {
        if (command_enable == 1) {
            radio.sendString("takeoff")
            flying = 1
            command_enable = 0
        }
    }

    /**
     * 受信機にドローンが着地をする命令を送信する．
    */
    //% block="着地をおこなう"
    //% group="中級者向け"
    export function land(): void {
        if (command_enable == 1) {
            radio.sendString("land")
            flying = 0
            command_enable = 0
        }
    }

    /**
     * ドローンの飛行状態の変数を取得する．
    */
    //% block="ドローンが飛行をしている"
    //% group="中級者向け"
    export function getflying(): boolean {
        if (flying == 1) {
            return true
        } else {
            return false
        }
    }

    /**
     * コントローラー内の変数を確認して飛行を開始するか，着地を行う．
     */
    //% block="ひこう/ちゃくちする"
    //% group="初心者向け"
    export function fly_or_land(): void {
        if (flying == 0 && command_enable == 1) {
            radio.sendString("takeoff")
            flying = 1
            command_enable = 0
        } else if (flying == 1 && command_enable == 1) {
            radio.sendString("land")
            flying = 0
            command_enable = 0
        }
    }

    /**
     * ラジコンモードで動作します．
     * かなり高難易度です．
     * @param a left/right a -100-100, eg: 0
     * @param b forward/backward b -100-100, eg: 0
     * @param c up/down c -100-100, eg: 0
     * @param d yaw d -100-100, eg: 0
     */
    //% block="RCモード | 左右 %a 前後 %b 上下 %c ヨー %d"
    //% group="上級者向け"
    export function RCmode(a: number, b: number, c: number, d: number): void {
        if (flying == 1) {
            let sendstring = "rc=" + a + "=" + b + "=" + c + "=" + d
            radio.sendString(sendstring)
        }
    }

    /**
     * ドローンが前フリップします！おしゃれ！
     */
    //% block="前フリップする(バッテリー50以上推奨)"
    //% group="フリップ"
    export function forward_flip(): void {
        if (flying == 1 && command_enable == 1) {
            radio.sendString("flip=f")
            command_enable = 0
        }
    }

    /**
     * ドローンが後ろフリップします！おしゃれ！
     */
    //% block="後ろフリップする(バッテリー50以上推奨)"
    //% group="フリップ"
    export function back_flip(): void {
        if (flying == 1 && command_enable == 1) {
            radio.sendString("flip=b")
            command_enable = 0
        }
    }

    /**
     * ドローンが左フリップします！おしゃれ！
     */
    //% block="左フリップする(バッテリー50以上推奨)"
    //% group="フリップ"
    export function left_flip(): void {
        if (flying == 1 && command_enable == 1) {
            radio.sendString("flip=l")
            command_enable = 0
        }
    }

    /**
     * ドローンが右フリップします！おしゃれ！
     */
    //% block="右フリップする(バッテリー50以上推奨)"
    //% group="フリップ"
    export function right_flip(): void {
        if (flying == 1 && command_enable == 1) {
            radio.sendString("flip=r")
            command_enable = 0
        }
    }

    /**
     * カメラを切り替える
     */
    //% block="カメラを切り替える "
    //% group="上級者向け"
    export function swiching_camera(): void {
        if (flying == 1 && command_enable == 1) {
            if (camera == 1) {
                radio.sendString("downvision 0")
                camera = 0
                command_enable = 0
            } else {
                radio.sendString("downvision 1")
                camera = 1
                command_enable = 0
            }
        }
    }

    /**
    * ドローンが三次元で移動します
    * @param x x -100-100, eg: 0
    * @param y y -100-100, eg: 0
    * @param z z -100-100, eg: 0
    * @param speed speed -100-100, eg: 0
    */
    //% block="自由飛行 | 前後（前が＋） %x 上下（上が＋） %y 左右（左が＋） %z speed %speed"
    //% group="上級者向け"
    export function xyz(x: number, y: number, z: number, speed: number): void {
        if (flying == 1 && command_enable == 1) {
            let sendstring = "go=" + x + "=" + z + "=" + y + "=" + speed
            radio.sendString(sendstring)
            command_enable = 0
        }
    }

    /**
    * 電源AをONにする！
    */
    //% block="電源AをON "
    //% group="上級者向け"
    export function energy_on_A(): void {
        if (flying == 1 && command_enable == 1) {
            radio.sendString("energy_on_A")
            command_enable = 0
        }
    }

    /**
   * 電源BをONにする！
   */
    //% block="電源BをON "
    //% group="上級者向け"
    export function energy_on_B(): void {
        if (flying == 1 && command_enable == 1) {
            radio.sendString("energy_on_B")
            command_enable = 0
        }
    }

    /**
   * 電源CをONにする！
   */
    //% block="電源CをON "
    //% group="上級者向け"
    export function energy_on_C(): void {
        if (flying == 1 && command_enable == 1) {
            radio.sendString("energy_on_C")
            command_enable = 0
        }
    }


    /**
    * ミッションパッド検出機能が有効になっている
    ID1のミッションパッドを検出します。
    認識に成功すると、ミッションパッド座標系
    の座標点(100、100、100） までspeed cm / sの速度で直進します(ドローンコンテストでは使用不可)
    * @param x x -100-100, eg: 0
    * @param y y -100-100, eg: 0
    * @param z z -100-100, eg: 0
    * @param speed speed -100-100, eg: 0
    * @param mid mid 1-8, eg: 0
    */
    //% block="ミッションパッドへ飛行(ドローンコンテストでは使用不可) | 前後（前が＋） %x 上下（上が＋） %y 左右（左が＋） %z speed %speed ミッションパッド番号 %mid"
    //% group="ミッションパッド"
    export function gomid(x: number, y: number, z: number, speed: number, mid: number): void {
        if (flying == 1 && command_enable == 1) {
            let sendstring = "go=" + x + "=" + z + "=&"
            let sendstring2 = y + "=" + speed + "=m" + mid
            radio.sendString(sendstring)
            radio.sendString(sendstring2)
            command_enable = 0
        }
    }


    /**
   * ドローンが三次元で移動します(かんたんver)
   */
    //% block="自由飛行(かんたん) | 前後 %ex 上下 %ey 左右 %ez"
    //% group="上級者向け"
    export function xyz_easy(ex: MyEnumX, ey: MyEnumY, ez: MyEnumZ,): void {
        if (flying == 1 && command_enable == 1) {
            let sendstring = "go=" + ex + "=" + ez + "=" + ey + "=60"
            radio.sendString(sendstring)
            command_enable = 0
        }
    }


    /**
   * ドローンが曲線で移動します(ドローンコンテストでは使用不可)
   * @param x1 x1 -100-100, eg: 0
   * @param y1 y1 -100-100, eg: 0
   * @param z1 z1 -100-100, eg: 0
   * @param x2 x2 -100-100, eg: 0
   * @param y2 y2 -100-100, eg: 0
   * @param z2 z2 -100-100, eg: 0
   * @param speed speed -100-100, eg: 0
   */
    //% block="曲線飛行(ドローンコンテストでは使用不可) | 前後（前が＋） %x1 上下（上が＋） %y1 左右（左が＋） %z1  前後 %x2 上下 %y2 左右 %z2 speed %speed"
    //% group="上級者向け"
    export function curve(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, speed: number): void {
        if (flying == 1 && command_enable == 1) {
            let sendstring = "curve=" + x1 + "=" + z1 + "=" + y1 + "=&"
            let sendstring2 = x2 + "=" + z2 + "=" + y2 + "=" + speed
            radio.sendString(sendstring)
            radio.sendString(sendstring2)
            command_enable = 0
        }
    }


}

let flying = 0
let command_enable = 1
let camera = 0