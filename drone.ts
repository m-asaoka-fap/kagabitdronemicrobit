/**
 * Custom blocks
 */
//% weight=0 color=#fc4c02 icon="\u26a1"
//% block="ドローン""
namespace Tello {
    /**
     * ドローンと通信するための無線を設定するよ
     * @param 通信グループの番号 value 1-100, eg: 1
     */
    //% block="無線グループの設定を行う %value"
    //% group="設定"
    export function radiosetgroup(value: number): void {
        radio.setGroup(value)
    }
    
    /**
     * 通信グループの設定を行う．受信機と送信機のグループ設定は合わせてね！
     * @param スピードの設定を行う value 10-100, eg: 10
     */
    //% block="スピードを設定する %value"
    //% group="設定"
    export function Setspeed(value : number): void {
        radio.sendString("speed=" + value)
   　}

    /**
     * ドローンが上昇するよ！
     * 移動する距離をえらんでね．
     * @param value 移動距離を設定する(cm) value 20-500, eg: 20
     */
    //% block="%value cm上がる"
    //% group="中級者向け"
    export function up(value: number): void {
        if (flying == 1) {
            radio.sendString("up=" + value)
            flying = 1
        }
    }

    /**
     * ドローンが下降するよ！
     * 移動する距離をえらんでね．
     * 地面に近すぎるとドローンがおかしくなるよ．気を付けてね
     * @param value 移動距離を設定する(cm) value 20-500, eg: 20
     */
    //% block="%value cm下がる"
    //% group="中級者向け"
    export function down(value: number): void {
        if (flying == 1) {
            radio.sendString("down=" + value)
            flying = 1
        }
    }

    /**
     * ドローンが前に進むよ！
     * 移動する距離をえらんでね．
     * @param value 移動距離を設定する(cm) value 20-500, eg: 20
     */
    //% block="%value cmまえにすすむ"
    //% group="初心者向け"
    export function forward(value: number): void {
        if (flying == 1) {
            radio.sendString("forward=" + value)
            flying = 1
        }
    }

    /**
     * ドローンが後ろに下がるよ！
     * 移動する距離をえらんでね．
     * @param value 移動距離を設定する(cm) value 20-500, eg: 20
     */
    //% block="%value cmうしろにさがる"
    //% group="初心者向け"
    export function back(value: number): void {
        if (flying == 1) {
            radio.sendString("back=" + value)
            flying = 1
        }
    }

    /**
     * ドローンが左に進むよ！
     * 移動する距離をえらんでね．
     * @param value 移動距離を設定する(cm) value 20-500, eg: 20
     */
    //% block="%value cmひだりにすすむ"
    //% group="初心者向け"
    export function left(value: number): void {
        if (flying == 1) {
            radio.sendString("left=" + value)
            flying = 1
        }
    }

    /**
     * ドローンが右に進むよ！
     * 移動する距離をえらんでね．
     * @param value 移動距離を設定する(cm) value 20-500, eg: 20
     */
    //% block="%value cmみぎにすすむ"
    //% group="初心者向け"
    export function right(value: number): void {
        if (flying == 1) {
            radio.sendString("right=" + value)
            flying = 1
        }
    }

    /**
     * ドローンが時計回りに回転するよ
     * 回転角度をえらんでね．．
     * @param value 時計回りする角度を設定する value 1-360, eg: 90
     */
    //% block="とけいまわりに回る %value 度"
    //% group="初心者向け"
    export function rotate_cw(value: number): void {
        if (flying == 1) {
            radio.sendString("cw=" + value)
            flying = 1
        }
    }

    /**
     * ドローンが半時計回りに回転するよ
     * 回転角度をえらんでね．．
     * @param value 半時計回りする角度を設定する value 1-360, eg: 90
     */
    //% block="はんとけいまわりに回る %value 度"
    //% group="初心者向け"
    export function rotate_ccw(value: number): void {
        if (flying == 1) {
            radio.sendString("ccw=" + value)
            flying = 1
        }
    }

    /**
     * 受信機にドローンが飛行を開始する命令を送信する．
     */
    //% block="りりくする"
    //% group="中級者向け"
    export function takeoff(): void {
        radio.sendString("takeoff")
        flying = 1
    }

    /**
     * 受信機にドローンが着地をする命令を送信する．
    */
    //% block="ちゃくりくする"
    //% group="中級者向け"
    export function land(): void {
        radio.sendString("land")
        flying = 0
    }

    /**
     * ドローンの飛行状態の変数を取得する．
    */
    //% block="ドローンが飛んでいる"
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
    //% block="りりく/ちゃくりくする"
    //% group="初心者向け"
    export function fly_or_land(): void {
        if (flying == 0) {
            radio.sendString("takeoff")
            flying = 1
        } else if (flying == 1) {
            radio.sendString("land")
            flying = 0
        }
    }

    /**
    * ドローンが前フリップします！おしゃれ！
    */
    //% block="前フリップする"
    //% group="フリップ"
    export function forward_flip(): void {
        if (flying == 1) {
            radio.sendString("flip=f")
        }
    
    }

    /**
     * ドローンが後ろフリップします！おしゃれ！
     */
    //% block="後ろフリップする"
    //% group="フリップ"
    export function back_flip(): void {
        if (flying == 1) {
            radio.sendString("flip=b")
        }
    }

    /**
     * ドローンが左フリップします！おしゃれ！
     */
    //% block="左フリップする"
    //% group="フリップ"
    export function left_flip(): void {
        if (flying == 1) {
            radio.sendString("flip=l")
        }
    }

    /**
     * ドローンが右フリップします！おしゃれ！
     */
    //% block="右フリップする"
    //% group="フリップ"
    export function right_flip(): void {
        if (flying == 1) {
            radio.sendString("flip=r")
        }
    }
    
}

let flying = 0