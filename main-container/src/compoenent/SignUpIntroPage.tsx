import styled from "styled-components";
import {useState} from "react";
import { useNavigate } from "react-router-dom";

const SignUpIntroPage = () => {
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const handleConfirm = () => {
        if (!name.trim()) {
            alert("이름을 입력해주세요.");
            return;
        }
        navigate("/step2", { state: { name } });
    };

    return (
        <PageWrapper>
            <h2 style={{ fontSize: "14px", color: "#5865f2", marginBottom: "8px" }}>
                STEP 1 / 4
            </h2>
            <h1 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "20px" }}>
                어떤 이름으로 불러 드릴까요?
            </h1>
            <input
                type="text"
                maxLength={6}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="이름 (한글 최대 6자)"
                style={{
                    border: "none",
                    borderBottom: "1px solid #ccc",
                    fontSize: "16px",
                    width: "100%",
                    padding: "8px 0",
                    outline: "none",
                }}
                onKeyDown={(e) => {
                    if(e.key === "Enter") {handleConfirm()}
                }}
            />
            <p style={{ marginTop: "20px", color: "#aaa", fontSize: "12px" }}>
                정확한 이름을 입력해 주세요.
            </p>

            <ConfirmButton onClick={handleConfirm} disabled={!name.trim()}>
                확인
            </ConfirmButton>
        </PageWrapper>
    );
};

export default SignUpIntroPage;

const PageWrapper = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 40px 24px 100px; //하단 버튼 영역만큼 여유 공간
    min-height: 100vh;
    box-sizing: border-box;
`;

const ConfirmButton = styled.button`
    margin-top: auto; //페이지 하단으로 밀어내기
    width: 100%;
    background-color: #5865f2;
    color: white;
    font-weight: bold;
    font-size: 16px;
    padding: 16px 0;
    border: none;
    cursor: pointer;
    border-radius: 8px;

    opacity: ${({ disabled }) => (disabled ? 0.4 : 1)};
    pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
`;