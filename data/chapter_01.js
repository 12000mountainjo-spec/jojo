window.CHAPTER_01 = {
  "id": "chapter_01",
  "title": "프롤로그",
  "source": "jojo_1-7_vn_choices_added.txt",
  "backgrounds": {
    "office_meeting_night": "assets/bg/office_meeting_night.png",
    "protagonist_reveal": "assets/protagonist/cao_mengde_reveal.png",
    "prologue_wife_peak_closeup": "assets/cg/prologue_wife_peak_closeup_cg.png",
    "auto_meeting_room": "assets/auto_prologue/B040_meeting_room.png",
    "auto_office_open": "assets/auto_prologue/B049_office_open.png",
    "auto_elevator": "assets/auto_prologue/B015_apartment_elevator.png",
    "auto_office_return_cg": "assets/auto_prologue/P024_office_return_cg.png",
    "auto_protagonist_reveal": "assets/auto_prologue/P014_cao_mengde_reveal.png",
    "auto_peak_closeup": "assets/auto_prologue/P074_peak_closeup_cg.png"
  },
  "nodes": [
    {
      "id": "ch01_0001",
      "type": "dialogue",
      "speaker": "거래처 부인",
      "text": "부인...",
      "bg": "auto_meeting_room",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {}
    },
    {
      "id": "ch01_0002",
      "type": "narration",
      "speaker": "",
      "text": "거래처 임원의 아내였다. 평소보다 진한 화장, 그리고 은은한 향수 내음.\n마지막 회의가 끝난 저녁, 우리는 회의실에 단둘이 남아있었다.",
      "bg": "auto_meeting_room",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "normal",
        "position": "center"
      }
    },
    {
      "id": "ch01_0003",
      "type": "monologue",
      "speaker": "나",
      "text": "나는 이 방의 공기가 이미 달라졌음을 느꼈다. 서류와 예의, 거래처라는 명분은 아직 남아 있었지만, 사람의 마음은 명분보다 먼저 흔들린다.",
      "bg": "auto_meeting_room",
      "cg": "",
      "choices": [],
      "routeTag": "prologue_wife.bp1",
      "effects": [],
      "meta": {
        "blockTitle": "CH01-BP1 회의실 잔류 첫 선택",
        "character": "거래처 임원의 아내"
      },
      "sprite": {
        "character": "prologue_wife",
        "expression": "normal",
        "position": "center"
      }
    },
    {
      "id": "ch01_0004",
      "type": "choice",
      "speaker": "선택",
      "text": "CH01-BP1 회의실 잔류 첫 선택\n거래처 임원의 아내의 반응을 결정한다.",
      "bg": "auto_meeting_room",
      "cg": "",
      "choices": [
        {
          "label": "서류 검토를 돕는 척 거리를 유지한다.",
          "effects": [
            {
              "key": "prologue_wife.trust",
              "value": 12
            },
            {
              "key": "prologue_wife.guard",
              "value": -5
            }
          ],
          "note": "- 효과: prologue_wife.trust +12 / prologue_wife.guard -5\n   - 후속: 친구·연인 엔딩 안정 루트",
          "result": {
            "text": "그녀는 안도의 숨을 내쉬며 서류 위로 시선을 돌렸다. 경계가 한 겹 낮아졌다.",
            "spriteExpression": "trust",
            "tone": "gold"
          }
        },
        {
          "label": "그녀의 긴장한 태도를 부드럽게 짚는다.",
          "effects": [
            {
              "key": "prologue_wife.desire",
              "value": 10
            },
            {
              "key": "prologue_wife.guard",
              "value": 4
            }
          ],
          "note": "- 효과: prologue_wife.desire +10 / prologue_wife.guard +4\n   - 후속: 연인·주종관계 공통 루트",
          "result": {
            "text": "그녀는 대답을 삼킨 채 손끝으로 옷깃을 만졌다. 공기가 조금 더 가까워졌다.",
            "spriteExpression": "soft",
            "tone": "blue"
          }
        },
        {
          "label": "곧장 분위기를 장악한다.",
          "effects": [
            {
              "key": "prologue_wife.dominance",
              "value": 14
            },
            {
              "key": "prologue_wife.guard",
              "value": 14
            }
          ],
          "note": "- 효과: prologue_wife.dominance +14 / prologue_wife.guard +14\n   - 후속: 주종관계 고위험 루트, 실패 위험 상승",
          "result": {
            "text": "그녀의 눈동자가 흔들렸다. 주도권은 잡았지만, 경계도 함께 올라갔다.",
            "spriteExpression": "startled",
            "tone": "red"
          }
        }
      ],
      "routeTag": "prologue_wife.bp1",
      "effects": [],
      "meta": {
        "blockTitle": "CH01-BP1 회의실 잔류 첫 선택",
        "character": "거래처 임원의 아내"
      },
      "sprite": {
        "character": "prologue_wife",
        "expression": "normal",
        "position": "center"
      }
    },
    {
      "id": "ch01_0005",
      "type": "dialogue",
      "speaker": "거래처 부인",
      "text": "이 서류만 검토하면 될 것 같은데...",
      "bg": "auto_meeting_room",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {}
    },
    {
      "id": "ch01_0006",
      "type": "narration",
      "speaker": "",
      "text": "그녀가 책상 위 서류를 정리하려 몸을 숙였다.\n블라우스 사이로 드러난 목덜미가 유혹적이었다.",
      "bg": "auto_meeting_room",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "normal",
        "position": "center"
      }
    },
    {
      "id": "ch01_0007",
      "type": "effect",
      "speaker": "효과",
      "text": "띠링- [ 유부녀 페로몬이 발산됩니다 ]",
      "bg": "auto_meeting_room",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "pheromone",
        "position": "center"
      }
    },
    {
      "id": "ch01_0008",
      "type": "narration",
      "speaker": "",
      "text": "나는 그녀의 뒤에 섰다. 체온이 전해졌다.",
      "bg": "auto_meeting_room",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "pheromone",
        "position": "center"
      }
    },
    {
      "id": "ch01_0009",
      "type": "dialogue",
      "speaker": "거래처 부인",
      "text": "과장님?",
      "bg": "auto_meeting_room",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "pheromone",
        "position": "center"
      }
    },
    {
      "id": "ch01_0010",
      "type": "narration",
      "speaker": "",
      "text": "그녀가 고개를 돌렸다. 눈이 마주쳤다.\n불현듯 그녀의 동공이 커졌다.",
      "bg": "auto_meeting_room",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "pheromone",
        "position": "center"
      }
    },
    {
      "id": "ch01_0011",
      "type": "dialogue",
      "speaker": "거래처 부인",
      "text": "무슨...",
      "bg": "auto_meeting_room",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "pheromone",
        "position": "center"
      }
    },
    {
      "id": "ch01_0012",
      "type": "narration",
      "speaker": "",
      "text": "그녀의 향기가 코끝을 스쳤다.\n내 손이 그녈 감싸 안았다.",
      "bg": "auto_meeting_room",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "pheromone",
        "position": "center"
      }
    },
    {
      "id": "ch01_0013",
      "type": "dialogue",
      "speaker": "거래처 부인",
      "text": "과장님, 이러시면 안 돼요.",
      "bg": "auto_meeting_room",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "startled",
        "position": "center"
      }
    },
    {
      "id": "ch01_0014",
      "type": "narration",
      "speaker": "",
      "text": "그녀의 목소리가 떨렸다. 하지만 그 눈빛은 달랐다.\n나는 천천히 다가섰다. 그녀는 뒷걸음질 쳤고, 결국 벽에 등이 닿았다.",
      "bg": "auto_meeting_room",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "startled",
        "position": "center"
      }
    },
    {
      "id": "ch01_0015",
      "type": "dialogue",
      "speaker": "나",
      "text": "이상하지 않소? 나를 보면 가슴이 뛰고, 숨이 막히고...",
      "bg": "auto_meeting_room",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "startled",
        "position": "center"
      }
    },
    {
      "id": "ch01_0016",
      "type": "narration",
      "speaker": "",
      "text": "그녀의 귓가에 속삭였다. 섬세한 목선이 파르르 떨렸다.\n부드러운 블라우스 너머로 그녀의 심장이 요동치는 것이 느껴졌다.",
      "bg": "auto_meeting_room",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "startled",
        "position": "center"
      }
    },
    {
      "id": "ch01_0017",
      "type": "dialogue",
      "speaker": "거래처 부인",
      "text": "안돼요... 전... 전 결혼한 여자예요.",
      "bg": "auto_meeting_room",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "startled",
        "position": "center"
      }
    },
    {
      "id": "ch01_0018",
      "type": "narration",
      "speaker": "",
      "text": "그녀가 양손으로 내 가슴을 밀어냈지만, 그 손길은 마치 애무처럼 느껴졌다.",
      "bg": "auto_meeting_room",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "startled",
        "position": "center"
      }
    },
    {
      "id": "ch01_0019",
      "type": "dialogue",
      "speaker": "나",
      "text": "그래. 당신은 유부녀지.",
      "bg": "auto_meeting_room",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "shy",
        "position": "center"
      }
    },
    {
      "id": "ch01_0020",
      "type": "narration",
      "speaker": "",
      "text": "내 손가락이 그녀의 쇄골을 천천히 더듬었다.",
      "bg": "auto_meeting_room",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "shy",
        "position": "center"
      }
    },
    {
      "id": "ch01_0021",
      "type": "dialogue",
      "speaker": "나",
      "text": "그게 더 좋소.",
      "bg": "auto_meeting_room",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "shy",
        "position": "center"
      }
    },
    {
      "id": "ch01_0022",
      "type": "narration",
      "speaker": "",
      "text": "그녀의 숨결이 차올랐다. 단추가 하나, 둘 풀어졌다.",
      "bg": "auto_meeting_room",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "shy",
        "position": "center"
      }
    },
    {
      "id": "ch01_0023",
      "type": "dialogue",
      "speaker": "거래처 부인",
      "text": "남의 것이라 더 탐나고, 금지된 것이라 더 빛나는 법이지.",
      "bg": "auto_meeting_room",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "shy",
        "position": "center"
      }
    },
    {
      "id": "ch01_0024",
      "type": "dialogue",
      "speaker": "거래처 부인",
      "text": "아...",
      "bg": "auto_meeting_room",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "shy",
        "position": "center"
      }
    },
    {
      "id": "ch01_0025",
      "type": "narration",
      "speaker": "",
      "text": "입술이 목덜미를 스치자 그녀의 허리가 활처럼 휘었다.",
      "bg": "auto_meeting_room",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "shy",
        "position": "center"
      }
    },
    {
      "id": "ch01_0026",
      "type": "dialogue",
      "speaker": "거래처 부인",
      "text": "이건... 잘못된 거예요.",
      "bg": "auto_meeting_room",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "soft",
        "position": "center"
      }
    },
    {
      "id": "ch01_0027",
      "type": "narration",
      "speaker": "",
      "text": "그녀가 중얼거렸다.\n떨리는 목소리로 말하면서도 그녀의 손은 내 셔츠를 움켜쥐었다.\n부정하는 입술과는 달리, 몸은 솔직했다.",
      "bg": "auto_meeting_room",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "soft",
        "position": "center"
      }
    },
    {
      "id": "ch01_0028",
      "type": "dialogue",
      "speaker": "거래처 부인",
      "text": "잘못된 걸 알면서도 피할 수 없다면...",
      "bg": "auto_meeting_room",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "soft",
        "position": "center"
      }
    },
    {
      "id": "ch01_0029",
      "type": "narration",
      "speaker": "",
      "text": "귓불을 살짝 깨물었다.",
      "bg": "auto_meeting_room",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "soft",
        "position": "center"
      }
    },
    {
      "id": "ch01_0030",
      "type": "dialogue",
      "speaker": "나",
      "text": "그게 바로 운명이오.",
      "bg": "auto_meeting_room",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "soft",
        "position": "center"
      }
    },
    {
      "id": "ch01_0031",
      "type": "narration",
      "speaker": "",
      "text": "그녀의 입술이 내 귓가에서 뜨겁게 헐떡였다.",
      "bg": "auto_meeting_room",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "soft",
        "position": "center"
      }
    },
    {
      "id": "ch01_0032",
      "type": "dialogue",
      "speaker": "거래처 부인",
      "text": "전 남편이 있는데...",
      "bg": "auto_meeting_room",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "guarded",
        "position": "center"
      }
    },
    {
      "id": "ch01_0033",
      "type": "dialogue",
      "speaker": "거래처 부인",
      "text": "그렇기에 더욱...",
      "bg": "auto_meeting_room",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "guarded",
        "position": "center"
      }
    },
    {
      "id": "ch01_0034",
      "type": "narration",
      "speaker": "",
      "text": "내 손이 그녀의 허리를 감쌌다.\n부드러운 곡선을 따라 천천히 올라가는 손길.\n그녀의 숨결이 점점 거칠어졌다.",
      "bg": "auto_meeting_room",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "guarded",
        "position": "center"
      }
    },
    {
      "id": "ch01_0035",
      "type": "dialogue",
      "speaker": "거래처 부인",
      "text": "부군께서 늘 자네 얘기를 하더군. 아름답다고.",
      "bg": "auto_meeting_room",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "guarded",
        "position": "center"
      }
    },
    {
      "id": "ch01_0036",
      "type": "narration",
      "speaker": "",
      "text": "손끝으로 그녀의 턱선을 쓸어내렸다.\n그녀의 눈동자가 촉촉하게 젖어들었다.",
      "bg": "auto_meeting_room",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "guarded",
        "position": "center"
      }
    },
    {
      "id": "ch01_0037",
      "type": "dialogue",
      "speaker": "나",
      "text": "하지만 그분은 자네를 이해하지 못하는 것 같소.",
      "bg": "auto_meeting_room",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "guarded",
        "position": "center"
      }
    },
    {
      "id": "ch01_0038",
      "type": "dialogue",
      "speaker": "거래처 부인",
      "text": "그만...",
      "bg": "auto_meeting_room",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "guarded",
        "position": "center"
      }
    },
    {
      "id": "ch01_0039",
      "type": "narration",
      "speaker": "",
      "text": "애원하는 듯한 목소리.\n하지만 그녀의 몸은 내게 더욱 밀착되어 있었다.",
      "bg": "auto_meeting_room",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "guarded",
        "position": "center"
      }
    },
    {
      "id": "ch01_0040",
      "type": "narration",
      "speaker": "",
      "text": "창밖에서 빗방울이 떨어지기 시작했다.\n회의실의 불빛이 희미하게 깜빡였다.",
      "bg": "auto_office_open",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "guarded",
        "position": "center"
      }
    },
    {
      "id": "ch01_0041",
      "type": "monologue",
      "speaker": "나",
      "text": "발소리는 짧았지만, 그녀에게는 천둥처럼 들렸을 것이다. 여기서 물러서면 안심을 얻고, 밀어붙이면 두려움을 얻는다. 어느 쪽도 쓸모는 있다.",
      "bg": "auto_office_open",
      "cg": "",
      "choices": [],
      "routeTag": "prologue_wife.bp2",
      "effects": [],
      "meta": {
        "blockTitle": "CH01-BP2 복도 발소리 대응",
        "character": "거래처 임원의 아내"
      },
      "sprite": {
        "character": "prologue_wife",
        "expression": "guarded",
        "position": "center"
      }
    },
    {
      "id": "ch01_0042",
      "type": "choice",
      "speaker": "선택",
      "text": "CH01-BP2 복도 발소리 대응\n거래처 임원의 아내의 반응을 결정한다.",
      "bg": "auto_office_open",
      "cg": "",
      "choices": [
        {
          "label": "잠시 멈추고 바깥 상황을 살핀다.",
          "effects": [
            {
              "key": "prologue_wife.trust",
              "value": 14
            },
            {
              "key": "prologue_wife.guard",
              "value": -10
            }
          ],
          "note": "- 효과: prologue_wife.trust +14 / prologue_wife.guard -10\n   - 후속: 친구·연인 엔딩 보정",
          "result": {
            "text": "잠깐의 침묵이 둘 사이의 과열을 식혔다. 그녀는 다시 숨을 골랐다.",
            "spriteExpression": "trust",
            "tone": "gold"
          }
        },
        {
          "label": "낮은 목소리로 안심시킨다.",
          "effects": [
            {
              "key": "prologue_wife.affection",
              "value": 8
            },
            {
              "key": "prologue_wife.dependence",
              "value": 8
            }
          ],
          "note": "- 효과: prologue_wife.affection +8 / prologue_wife.dependence +8\n   - 후속: 연인·주종관계 공통 보정",
          "result": {
            "text": "낮은 목소리가 닿자 그녀의 표정이 부드럽게 풀렸다.",
            "spriteExpression": "soft",
            "tone": "blue"
          }
        },
        {
          "label": "두려움이 지나가길 기다리지 않는다.",
          "effects": [
            {
              "key": "prologue_wife.dominance",
              "value": 16
            },
            {
              "key": "prologue_wife.guard",
              "value": 16
            }
          ],
          "note": "- 효과: prologue_wife.dominance +16 / prologue_wife.guard +16\n   - 후속: 주종관계 보정, 실패 판정 위험",
          "result": {
            "text": "그녀는 물러서지 못한 채 굳어 있었다. 선택의 무게가 방 안에 내려앉았다.",
            "spriteExpression": "startled",
            "tone": "red"
          }
        }
      ],
      "routeTag": "prologue_wife.bp2",
      "effects": [],
      "meta": {
        "blockTitle": "CH01-BP2 복도 발소리 대응",
        "character": "거래처 임원의 아내"
      },
      "sprite": {
        "character": "prologue_wife",
        "expression": "guarded",
        "position": "center"
      }
    },
    {
      "id": "ch01_0043",
      "type": "narration",
      "speaker": "",
      "text": "누군가의 발소리가 복도에서 들려왔다.\n그녀가 흠칫 놀라 몸을 굳혔다.",
      "bg": "auto_office_open",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "startled",
        "position": "center"
      }
    },
    {
      "id": "ch01_0044",
      "type": "dialogue",
      "speaker": "거래처 부인",
      "text": "누가...",
      "bg": "auto_office_open",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "startled",
        "position": "center"
      }
    },
    {
      "id": "ch01_0045",
      "type": "dialogue",
      "speaker": "나",
      "text": "걱정 말아요.",
      "bg": "auto_office_open",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "startled",
        "position": "center"
      }
    },
    {
      "id": "ch01_0046",
      "type": "narration",
      "speaker": "",
      "text": "그녀의 귓가에 속삭였다.\n발소리는 멀어져갔다.",
      "bg": "auto_office_open",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "startled",
        "position": "center"
      }
    },
    {
      "id": "ch01_0047",
      "type": "narration",
      "speaker": "",
      "text": "빗소리가 점점 거세졌다.\n그녀의 숨소리도 점점 거칠어졌다.\n블라우스 사이로 드러난 하얀 살결이 떨리고 있었다.",
      "bg": "auto_office_open",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "startled",
        "position": "center"
      }
    },
    {
      "id": "ch01_0048",
      "type": "dialogue",
      "speaker": "거래처 부인",
      "text": "이러면 안 돼요...",
      "bg": "auto_office_open",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "startled",
        "position": "center"
      }
    },
    {
      "id": "ch01_0049",
      "type": "narration",
      "speaker": "",
      "text": "그녀의 말과 달리 손은 내 등을 더욱 강하게 움켜쥐었다.\n입술이 스치듯 만났다가, 다시 깊어졌다.\n혀끝이 얽혔다.",
      "bg": "auto_office_open",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "startled",
        "position": "center"
      }
    },
    {
      "id": "ch01_0050",
      "type": "effect",
      "speaker": "효과",
      "text": "그때였다.",
      "bg": "auto_elevator",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "phone",
        "position": "center"
      }
    },
    {
      "id": "ch01_0051",
      "type": "effect",
      "speaker": "효과",
      "text": "띠링-",
      "bg": "auto_elevator",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "phone",
        "position": "center"
      }
    },
    {
      "id": "ch01_0052",
      "type": "effect",
      "speaker": "효과",
      "text": "휴대폰 진동이 울렸다.\n그녀가 흠칫 놀라며 내 품에서 빠져나가려 했다.",
      "bg": "auto_elevator",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "phone",
        "position": "center"
      }
    },
    {
      "id": "ch01_0053",
      "type": "dialogue",
      "speaker": "거래처 부인",
      "text": "여보세요? ...아, 여보...",
      "bg": "auto_elevator",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "phone",
        "position": "center"
      }
    },
    {
      "id": "ch01_0054",
      "type": "narration",
      "speaker": "",
      "text": "남편과의 통화.\n그녀의 손이 떨렸다.",
      "bg": "auto_elevator",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "phone",
        "position": "center"
      }
    },
    {
      "id": "ch01_0055",
      "type": "narration",
      "speaker": "",
      "text": "나는 입꼬리를 비틀어 올렸다.\n이 순간을 기다렸다는 듯이.",
      "bg": "auto_elevator",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "phone",
        "position": "center"
      }
    },
    {
      "id": "ch01_0056",
      "type": "dialogue",
      "speaker": "거래처 부인",
      "text": "응, 나 아직 회사...",
      "bg": "auto_elevator",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "phone",
        "position": "center"
      }
    },
    {
      "id": "ch01_0057",
      "type": "monologue",
      "speaker": "나",
      "text": "전화기 너머의 남편은 이 방의 공기를 알지 못한다. 그녀가 무엇을 선택하는지보다, 자신이 무엇을 숨기려 하는지가 더 중요해지는 순간이었다.",
      "bg": "auto_elevator",
      "cg": "",
      "choices": [],
      "routeTag": "prologue_wife.bp3",
      "effects": [],
      "meta": {
        "blockTitle": "CH01-BP3 남편 전화",
        "character": "거래처 임원의 아내"
      },
      "sprite": {
        "character": "prologue_wife",
        "expression": "phone",
        "position": "center"
      }
    },
    {
      "id": "ch01_0058",
      "type": "choice",
      "speaker": "선택",
      "text": "CH01-BP3 남편 전화\n거래처 임원의 아내의 반응을 결정한다.",
      "bg": "auto_elevator",
      "cg": "",
      "choices": [
        {
          "label": "통화가 끝날 때까지 조용히 기다린다.",
          "effects": [
            {
              "key": "prologue_wife.trust",
              "value": 16
            },
            {
              "key": "prologue_wife.guard",
              "value": -8
            }
          ],
          "note": "- 효과: prologue_wife.trust +16 / prologue_wife.guard -8\n   - 엔딩 경향: 친구 또는 연인",
          "result": {
            "text": "전화기 너머의 목소리가 지나갈 때까지, 그녀는 흔들리는 손으로 화면을 붙잡았다.",
            "spriteExpression": "phone",
            "tone": "gold"
          }
        },
        {
          "label": "그녀가 스스로 감정을 인정하게 만든다.",
          "effects": [
            {
              "key": "prologue_wife.affection",
              "value": 12
            },
            {
              "key": "prologue_wife.dependence",
              "value": 12
            }
          ],
          "note": "- 효과: prologue_wife.affection +12 / prologue_wife.dependence +12\n   - 엔딩 경향: 연인 또는 주종관계",
          "result": {
            "text": "그녀는 더 이상 감정을 숨기지 못했다. 시선이 오래 머물렀다.",
            "spriteExpression": "shy",
            "tone": "blue"
          }
        },
        {
          "label": "불안과 죄책감을 정면으로 흔든다.",
          "effects": [
            {
              "key": "prologue_wife.dominance",
              "value": 18
            },
            {
              "key": "prologue_wife.guard",
              "value": 18
            }
          ],
          "note": "- 효과: prologue_wife.dominance +18 / prologue_wife.guard +18\n   - 엔딩 경향: 주종관계 또는 실패",
          "result": {
            "text": "갈등 끝에 그녀의 표정이 단단해졌다. 돌이킬 수 없는 선이 그어졌다.",
            "spriteExpression": "resolve",
            "tone": "red"
          }
        }
      ],
      "routeTag": "prologue_wife.bp3",
      "effects": [],
      "meta": {
        "blockTitle": "CH01-BP3 남편 전화",
        "character": "거래처 임원의 아내"
      },
      "sprite": {
        "character": "prologue_wife",
        "expression": "flustered",
        "position": "center"
      }
    },
    {
      "id": "ch01_0059",
      "type": "narration",
      "speaker": "",
      "text": "그녀의 말이 끊겼다.\n내 몸이 그녀의 속에 한층 깊이 파고들었기 때문이다.",
      "bg": "auto_office_open",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "shy",
        "position": "center"
      }
    },
    {
      "id": "ch01_0060",
      "type": "dialogue",
      "speaker": "거래처 부인",
      "text": "아...",
      "bg": "auto_office_open",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "shy",
        "position": "center"
      }
    },
    {
      "id": "ch01_0061",
      "type": "narration",
      "speaker": "",
      "text": "작은 신음이 새어나왔다.",
      "bg": "auto_office_open",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "shy",
        "position": "center"
      }
    },
    {
      "id": "ch01_0062",
      "type": "dialogue",
      "speaker": "거래처 부인",
      "text": "아니... 아니야. 그냥 좀 피곤해서...",
      "bg": "auto_office_open",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "shy",
        "position": "center"
      }
    },
    {
      "id": "ch01_0063",
      "type": "narration",
      "speaker": "",
      "text": "전화기를 든 그녀의 손이 부들부들 떨렸다.\n다른 한 손으로는 내 머리를 밀어내려 했지만,\n그 손길마저 애무처럼 느껴졌다.",
      "bg": "auto_office_open",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "shy",
        "position": "center"
      }
    },
    {
      "id": "ch01_0064",
      "type": "dialogue",
      "speaker": "거래처 부인",
      "text": "곧... 곧 갈게...",
      "bg": "auto_office_open",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "shy",
        "position": "center"
      }
    },
    {
      "id": "ch01_0065",
      "type": "narration",
      "speaker": "",
      "text": "블라우스의 단추가 하나 둘 풀려나갔다.\n하얀 속옷이 드러났다.",
      "bg": "auto_office_open",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "shy",
        "position": "center"
      }
    },
    {
      "id": "ch01_0066",
      "type": "dialogue",
      "speaker": "거래처 부인",
      "text": "여보, 나중에 다시...",
      "bg": "auto_office_open",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "shy",
        "position": "center"
      }
    },
    {
      "id": "ch01_0067",
      "type": "narration",
      "speaker": "",
      "text": "전화를 끊으려는 그녀의 손목을 잡았다.",
      "bg": "auto_office_open",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "shy",
        "position": "center"
      }
    },
    {
      "id": "ch01_0068",
      "type": "dialogue",
      "speaker": "나",
      "text": "끊지 마시오.",
      "bg": "auto_office_open",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "soft",
        "position": "center"
      }
    },
    {
      "id": "ch01_0069",
      "type": "narration",
      "speaker": "",
      "text": "그녀의 눈이 커졌다.",
      "bg": "auto_office_open",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "soft",
        "position": "center"
      }
    },
    {
      "id": "ch01_0070",
      "type": "dialogue",
      "speaker": "나",
      "text": "남편과 통화하면서...",
      "bg": "auto_office_open",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "soft",
        "position": "center"
      }
    },
    {
      "id": "ch01_0071",
      "type": "narration",
      "speaker": "",
      "text": "귓가에 속삭였다.",
      "bg": "auto_office_open",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "soft",
        "position": "center"
      }
    },
    {
      "id": "ch01_0072",
      "type": "dialogue",
      "speaker": "나",
      "text": "더 짜릿하지 않소?",
      "bg": "auto_office_open",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "soft",
        "position": "center"
      }
    },
    {
      "id": "ch01_0073",
      "type": "dialogue",
      "speaker": "거래처 부인",
      "text": "안돼요... 이건...",
      "bg": "auto_office_open",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "soft",
        "position": "center"
      }
    },
    {
      "id": "ch01_0074",
      "type": "narration",
      "speaker": "",
      "text": "허리를 더욱 세게 끌어당겼다.",
      "bg": "auto_office_open",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "soft",
        "position": "center"
      }
    },
    {
      "id": "ch01_0075",
      "type": "dialogue",
      "speaker": "거래처 부인",
      "text": "어... 응, 여보? 아니... 아무것도...",
      "bg": "auto_office_return_cg",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "flustered",
        "position": "center"
      },
      "clearSprite": true,
      "cinematic": "service-cg"
    },
    {
      "id": "ch01_0076",
      "type": "narration",
      "speaker": "",
      "text": "그녀의 치마가 걷혔다.\n손끝에 닿는 매끄러운 허벅지.\n그녀의 숨결이 거칠어졌다.",
      "bg": "auto_office_return_cg",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "flustered",
        "position": "center"
      },
      "clearSprite": true,
      "cinematic": "service-cg"
    },
    {
      "id": "ch01_0077",
      "type": "dialogue",
      "speaker": "거래처 부인",
      "text": "이러시면...",
      "bg": "auto_office_return_cg",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "flustered",
        "position": "center"
      },
      "clearSprite": true,
      "cinematic": "service-cg"
    },
    {
      "id": "ch01_0078",
      "type": "narration",
      "speaker": "",
      "text": "전화기를 든 채로 신음을 참는 그녀의 모습이 나를 더욱 미치게 만들었다.",
      "bg": "auto_office_return_cg",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "flustered",
        "position": "center"
      },
      "clearSprite": true,
      "cinematic": "service-cg"
    },
    {
      "id": "ch01_service_peak_flash",
      "type": "effect",
      "speaker": "연출",
      "text": "하얀 빛이 시야를 가르며, 그녀의 숨이 순간적으로 흐트러졌다.",
      "bg": "auto_peak_closeup",
      "cg": "assets/auto_prologue/P074_peak_closeup_cg.png",
      "choices": [],
      "routeTag": "prologue_wife.service_peak",
      "effects": [
        "white-flash"
      ],
      "meta": {
        "blockTitle": "??? ??",
        "character": "??? ??"
      },
      "clearSprite": true,
      "cinematic": "service-cg",
      "flash": true
    },
    {
      "id": "ch01_0079",
      "type": "dialogue",
      "speaker": "거래처 부인",
      "text": "...사랑해.",
      "bg": "office_meeting_night",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "flustered",
        "position": "center"
      }
    },
    {
      "id": "ch01_0080",
      "type": "narration",
      "speaker": "",
      "text": "마지막 말을 남기고 전화를 끊은 그녀가 내 품 안에서 파르르 떨었다.",
      "bg": "office_meeting_night",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "flustered",
        "position": "center"
      }
    },
    {
      "id": "ch01_0081",
      "type": "dialogue",
      "speaker": "나",
      "text": "이제 돌이킬 수 없소.",
      "bg": "office_meeting_night",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "flustered",
        "position": "center"
      }
    },
    {
      "id": "ch01_0082",
      "type": "narration",
      "speaker": "",
      "text": "나는 씩 웃으며 그녀를 더욱 세게 안았다.",
      "bg": "office_meeting_night",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "flustered",
        "position": "center"
      }
    },
    {
      "id": "ch01_0083",
      "type": "narration",
      "speaker": "",
      "text": "빗소리가 그녀의 흐트러진 숨결을 덮었다.",
      "bg": "office_meeting_night",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "flustered",
        "position": "center"
      }
    },
    {
      "id": "ch01_0084",
      "type": "monologue",
      "speaker": "나",
      "text": "나는 조조 맹덕.",
      "bg": "auto_protagonist_reveal",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "flustered",
        "position": "center"
      },
      "clearSprite": true,
      "cinematic": "protagonist"
    },
    {
      "id": "intro_cao_title_after_0084",
      "type": "title",
      "speaker": "타이틀",
      "text": "삼국지 : 조조님이 만져주셔",
      "bg": "auto_protagonist_reveal",
      "clearSprite": true,
      "showTitle": true,
      "cinematic": "title"
    },
    {
      "id": "ch01_0085",
      "type": "narration",
      "speaker": "",
      "text": "2천년의 세월을 뛰어넘어 다시 부활했다.",
      "bg": "auto_protagonist_reveal",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "flustered",
        "position": "center"
      },
      "clearSprite": true,
      "cinematic": "protagonist"
    },
    {
      "id": "ch01_0087",
      "type": "narration",
      "speaker": "",
      "text": "남의 손에 들린, 그 모든 금단의 꽃들을 차지하기 위해.",
      "bg": "auto_protagonist_reveal",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {},
      "sprite": {
        "character": "prologue_wife",
        "expression": "flustered",
        "position": "center"
      },
      "clearSprite": true,
      "cinematic": "protagonist"
    },
    {
      "id": "ch01_0088",
      "type": "ending",
      "speaker": "시스템",
      "text": "프롤로그 1화가 끝났다. 선택 결과에 따라 거래처 부인의 후속 루트가 달라진다.",
      "bg": "auto_protagonist_reveal",
      "cg": "",
      "choices": [],
      "routeTag": "",
      "effects": [],
      "meta": {
        "chapterClear": true
      },
      "clearSprite": true,
      "cinematic": "protagonist"
    }
  ],
  "characters": {
    "prologue_wife": {
      "name": "??? ??",
      "anchor": "center",
      "sprites": {
        "normal": "assets/characters/prologue_wife_story/cut01_calm.png",
        "attentive": "assets/characters/prologue_wife_story/cut02_attentive.png",
        "guarded": "assets/characters/prologue_wife_story/cut03_guarded.png",
        "flustered": "assets/characters/prologue_wife_story/cut04_peak.png",
        "trust": "assets/characters/prologue_wife_story/cut05_trust.png",
        "startled": "assets/characters/prologue_wife_story/cut06_startled.png",
        "soft": "assets/characters/prologue_wife_story/cut07_soft.png",
        "phone": "assets/characters/prologue_wife_story/cut08_phone.png",
        "resolve": "assets/characters/prologue_wife_story/cut09_resolve.png",
        "pheromone": "assets/characters/prologue_wife_story/cut10_pheromone_startle.png",
        "shy": "assets/characters/prologue_wife_story/cut11_shy.png"
      }
    }
  }
};
