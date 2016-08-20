import React, {Component, PropTypes} from 'react';

class DiaryTextBox extends Component {

    render() {
        return (
            <div className="diary-textbox">
                <span className="diary_created_date">2016.08.05 12:12AM</span>
                <img src={require('../images/btn_current_time.svg')} className="btn_current_time"></img>
                <img src={require('../images/btn_trash.svg')} className="btn_trash"></img>
                <input type="text" className="diary_title" value="사소한 것은 하나도 없다." disabled></input>
                <hr className="seperate_title_contents"></hr>
                <textarea className="diary_contents" >
                    이맘때, 남한산성에 올랐다.숲은 짙푸른 녹음으로 어두웠고, 숲 속엔 어렵사리 빛들이 스며들고 있었다.뜨거운 여름날이면 흔하디 흔한 빛이 숲 속엔 드문드문 스며들어 빛이 비치는 곳에 머무는 것들을 아주 특별하게 만들고 있었다.이맘때, 남한산성에 올랐다.숲은 짙푸른 녹음으로 어두웠고, 숲 속엔 어렵사리 빛들이 스며들고 있었다.이맘때, 남한산성에 올랐다.숲은 짙푸른 녹음으로 어두웠고, 숲 속엔 어렵사리 빛들이 스며들고 있었다.있었다.이맘때, 남한산성에 올랐다.숲은 짙푸른 녹음으로 어두웠고, 숲 속엔 어렵사리 빛들이 스며들고 있었다.
                    이맘때, 남한산성에 올랐다.숲은 짙푸른 녹음으로 어두웠고, 숲 속엔 어렵사리 빛들이 스며들고 있었다.뜨거운 여름날이면 흔하디 흔한 빛이 숲 속엔 드문드문 스며들어 빛이 비치는 곳에 머무는 것들을 아주 특별하게 만들고 있었다.이맘때, 남한산성에 올랐다.숲은 짙푸른 녹음으로 어두웠고, 숲 속엔 어렵사리 빛들이 스며들고 있었다.이맘때, 남한산성에 올랐다.숲은 짙푸른 녹음으로 어두웠고, 숲 속엔 어렵사리 빛들이 스며들고 있었다.있었다.이맘때, 남한산성에 올랐다.숲은 짙푸른 녹음으로 어두웠고, 숲 속엔 어렵사리 빛들이 스며들고 있었다.
                    이맘때, 남한산성에 올랐다.숲은 짙푸른 녹음으로 어두웠고, 숲 속엔 어렵사리 빛들이 스며들고 있었다.뜨거운 여름날이면 흔하디 흔한 빛이 숲 속엔 드문드문 스며들어 빛이 비치는 곳에 머무는 것들을 아주 특별하게 만들고 있었다.이맘때, 남한산성에 올랐다.숲은 짙푸른 녹음으로 어두웠고, 숲 속엔 어렵사리 빛들이 스며들고 있었다.이맘때, 남한산성에 올랐다.숲은 짙푸른 녹음으로 어두웠고, 숲 속엔 어렵사리 빛들이 스며들고 있었다.있었다.이맘때, 남한산성에 올랐다.숲은 짙푸른 녹음으로 어두웠고, 숲 속엔 어렵사리 빛들이 스며들고 있었다.
                    이맘때, 남한산성에 올랐다.숲은 짙푸른 녹음으로 어두웠고, 숲 속엔 어렵사리 빛들이 스며들고 있었다.뜨거운 여름날이면 흔하디 흔한 빛이 숲 속엔 드문드문 스며들어 빛이 비치는 곳에 머무는 것들을 아주 특별하게 만들고 있었다.이맘때, 남한산성에 올랐다.숲은 짙푸른 녹음으로 어두웠고, 숲 속엔 어렵사리 빛들이 스며들고 있었다.이맘때, 남한산성에 올랐다.숲은 짙푸른 녹음으로 어두웠고, 숲 속엔 어렵사리 빛들이 스며들고 있었다.있었다.이맘때, 남한산성에 올랐다.숲은 짙푸른 녹음으로 어두웠고, 숲 속엔 어렵사리 빛들이 스며들고 있었다.

                </textarea>
                <img src={require('../images/btn_diary_edit.svg')} className="btn_diary_edit"/>
            </div>
        )
    };

}

export default DiaryTextBox;
