import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

/* =============== Layout & Theme =============== */

const Shell = styled.div`
  /* Let the content define height so the bottom ad sits right below it */
  min-height: 0;
  display: block;
  background: transparent;
  color: #e8ecff;
`;

const Main = styled.main`
  overflow: visible;
`;

/* =============== Shared UI Bits =============== */

const Tabs = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  background: rgba(24, 28, 48, 0.9);
  padding: 6px;
  border-radius: 12px;
  border: 1px solid rgba(110, 120, 190, 0.5);
  margin-bottom: 12px;

  @media (max-width: 640px) {
    margin-bottom: 10px;
    width: 100%;
  }
`;

const TabBtn = styled.button`
  height: 36px;
  padding: 0 14px;
  border-radius: 10px;
  border: 1px solid transparent;
  background: ${p => (p.active ? 'rgba(142, 168, 255, 0.18)' : 'transparent')};
  color: ${p => (p.active ? '#e8ecff' : 'rgba(232, 236, 255, 0.82)')};
  cursor: pointer;
  font-weight: 800;

  @media (max-width: 640px) {
    height: 32px;
    padding: 0 10px;
    font-size: 13px;
  }
`;

const Card = styled.section`
  border: 1px solid rgba(110, 120, 190, 0.35);
  background: rgba(12, 14, 28, 0.72);
  border-radius: 18px;
  padding: clamp(18px, 2.2vw, 24px);
  box-shadow: 0 18px 48px rgba(0, 0, 0, 0.55);
  backdrop-filter: blur(6px);
  margin-bottom: 18px;

  @media (max-width: 640px) {
    padding: 14px;
    margin-bottom: 12px;
    border-radius: 16px;
  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(${p => p.cols || 2}, minmax(0, 1fr));
  gap: 14px;

  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const Field = styled.div`
  display: grid;
  gap: 6px;
`;

const Label = styled.label`
  font-weight: 800;
  color: #cfd8ff;
`;

const Input = styled.input`
  height: 40px;
  border: 1px solid rgba(150, 150, 200, 0.4);
  border-radius: 10px;
  padding: 0 12px;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.2;
  background: rgba(25, 28, 45, 0.9);
  color: #e8ecff;
`;

const Select = styled.select`
  height: 40px;
  border: 1px solid rgba(150, 150, 200, 0.4);
  border-radius: 10px;
  padding: 0 12px;
  font-weight: 600;
  font-size: 16px;        /* 👈 CRITICAL */
  line-height: 1.2;
  background: rgba(25, 28, 45, 0.9);
  color: #e8ecff;
`;

const SmallButton = styled.button`
  height: 32px;
  padding: 0 10px;
  border-radius: 8px;
  border: 1px solid rgba(140, 140, 200, 0.45);
  background: rgba(35, 40, 70, 0.95);
  font-weight: 800;
  cursor: pointer;
  color: #dbe5ff;
  transition: 0.15s ease;

  &:hover {
    background: rgba(55, 65, 100, 0.98);
  }
`;

const Tag = styled.span`
  display: inline-flex;
  height: 22px;
  align-items: center;
  padding: 0 8px;
  font-size: 12px;
  font-weight: 900;
  border-radius: 999px;
  color: #a9bcff;
  background: rgba(95, 115, 255, 0.25);
  border: 1px solid rgba(145, 165, 255, 0.45);
`;

const Small = styled.small`
  color: #9bb5ff;
  opacity: 0.8;
`;

/* =============== Quick Final Calculator =============== */

function QuickFinalCard() {
  const [current, setCurrent] = useState('');
  const [finalWeight, setFinalWeight] = useState('');
  const [target, setTarget] = useState('');

  const needed = useMemo(() => {
    const c = parseFloat(current);
    const w = parseFloat(finalWeight);
    const t = parseFloat(target);
    if (Number.isNaN(c) || Number.isNaN(w) || Number.isNaN(t) || w <= 0 || w >= 100) {
      return null;
    }
    const portion = w / 100;
    const x = (t - c * (1 - portion)) / portion;
    return x;
  }, [current, finalWeight, target]);

  return (
    <Card>
      <h2 style={{ marginTop: 0, marginBottom: 10 }}>Quick Final Grade Calculator</h2>
      <Row cols={3}>
        <Field>
          <Label>Current grade in class (%)</Label>
          <Input
            type="number"
            value={current}
            onChange={e => setCurrent(e.target.value)}
            placeholder="e.g. 87"
          />
        </Field>
        <Field>
          <Label>Final exam weight (%)</Label>
          <Input
            type="number"
            value={finalWeight}
            onChange={e => setFinalWeight(e.target.value)}
            placeholder="e.g. 35"
          />
        </Field>
        <Field>
          <Label>Desired final grade (%)</Label>
          <Input
            type="number"
            value={target}
            onChange={e => setTarget(e.target.value)}
            placeholder="e.g. 90"
          />
        </Field>
      </Row>

      <div style={{ marginTop: 16 }}>
        {needed == null ? (
          <Small>Enter all three numbers to see what you need on the final.</Small>
        ) : (
          <>
            <div style={{ fontWeight: 900, fontSize: 18 }}>
              You need about{' '}
              <span style={{ color: '#ffd26a' }}>
                {needed.toFixed(2)}%
              </span>{' '}
              on your final exam.
            </div>
            {needed > 100 && (
              <Small>
                This is above 100%. It may be mathematically impossible to end with your
                desired grade in this class.
              </Small>
            )}
            {needed < 0 && (
              <Small>
                You could score 0 on the final and still reach your desired grade. 💅
              </Small>
            )}
          </>
        )}
      </div>
    </Card>
  );
}

/* =============== Helpers for Class Planner =============== */

function createEmptyCourse() {
  return {
    id: `course_${Date.now()}`,
    name: 'My Class',
    target: 90,
    sections: [
      { id: 'sec_quiz', label: 'Quizzes', weight: 15, isFinal: false, assignments: [] },
      { id: 'sec_mid', label: 'Midterm', weight: 25, isFinal: false, assignments: [] },
      { id: 'sec_hw', label: 'Homework', weight: 20, isFinal: false, assignments: [] },
      { id: 'sec_final', label: 'Final Exam', weight: 40, isFinal: true, assignments: [] }
    ]
  };
}

function computeSectionAverage(section) {
  const totalEarned = section.assignments.reduce(
    (sum, a) => sum + (Number(a.score) || 0),
    0
  );
  const totalPossible = section.assignments.reduce(
    (sum, a) => sum + (Number(a.outOf) || 0),
    0
  );
  if (!totalPossible) return null;
  return (totalEarned / totalPossible) * 100;
}

function computeCurrentGrade(course) {
  const sections = course.sections || [];
  let weightedSum = 0;
  let weightUsed = 0;

  sections.forEach(sec => {
    const avg = computeSectionAverage(sec);
    if (avg != null) {
      weightedSum += avg * (Number(sec.weight) || 0);
      weightUsed += Number(sec.weight) || 0;
    }
  });

  if (!weightUsed) return null;
  return weightedSum / weightUsed;
}

function computeNeededOnFinal(course) {
  const target = Number(course.target);
  if (Number.isNaN(target)) return null;

  const totalWeight = course.sections.reduce(
    (sum, sec) => sum + (Number(sec.weight) || 0),
    0
  );

  const finalSection = course.sections.find(sec => sec.isFinal);
  if (!finalSection) return null;

  const wFinal = Number(finalSection.weight) || 0;
  if (!wFinal) return null;

  if (Math.abs(totalWeight - 100) > 0.5) return { invalidWeights: true };

  let sumNonFinal = 0;
  course.sections.forEach(sec => {
    if (sec.id === finalSection.id) return;
    const avg = computeSectionAverage(sec);
    if (avg != null) {
      sumNonFinal += avg * (Number(sec.weight) || 0);
    }
  });

  const x = (target * 100 - sumNonFinal) / wFinal;
  return { needed: x, invalidWeights: false };
}

/* =============== Class Planner UI =============== */

function PlannerCard() {
  const [courses, setCourses] = useState([]);
  const [selectedId, setSelectedId] = useState('');

  useEffect(() => {
    try {
      const raw = localStorage.getItem('gradeplanner_courses');
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length) {
          setCourses(parsed);
          setSelectedId(parsed[0].id);
          return;
        }
      }
    } catch (e) {
      console.warn('Failed to load courses', e);
    }
    const def = createEmptyCourse();
    setCourses([def]);
    setSelectedId(def.id);
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('gradeplanner_courses', JSON.stringify(courses));
    } catch (e) {
      console.warn('Failed to save courses', e);
    }
  }, [courses]);

  const selectedCourse = courses.find(c => c.id === selectedId);

  const updateCourse = updater => {
    setCourses(prev =>
      prev.map(c => (c.id === selectedId ? updater(c) : c))
    );
  };

  const addCourse = () => {
    const next = createEmptyCourse();
    setCourses(prev => [next, ...prev]);
    setSelectedId(next.id);
  };

  const deleteCourse = () => {
    if (!selectedCourse) return;
    const remaining = courses.filter(c => c.id !== selectedCourse.id);
    setCourses(remaining);
    if (remaining.length) {
      setSelectedId(remaining[0].id);
    } else {
      const def = createEmptyCourse();
      setCourses([def]);
      setSelectedId(def.id);
    }
  };

  const currentGrade = selectedCourse ? computeCurrentGrade(selectedCourse) : null;
  const neededFinal = selectedCourse ? computeNeededOnFinal(selectedCourse) : null;

  if (!selectedCourse) return null;

  return (
    <>
      <Card>
        <Row cols={3}>
          <Field>
            <Label>Saved class</Label>
            <div style={{ display: 'flex', gap: 8 }}>
              <Select
                style={{ flex: 1 }}
                value={selectedCourse.id}
                onChange={e => setSelectedId(e.target.value)}
              >
                {courses.map(c => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </Select>
              <SmallButton type="button" onClick={addCourse}>
                + New
              </SmallButton>
            </div>
          </Field>
          <Field>
            <Label>Class name</Label>
            <Input
              value={selectedCourse.name}
              onChange={e =>
                updateCourse(c => ({ ...c, name: e.target.value }))
              }
            />
          </Field>
          <Field>
            <Label>Target overall grade (%)</Label>
            <Input
              type="number"
              value={selectedCourse.target}
              onChange={e =>
                updateCourse(c => ({
                  ...c,
                  target: e.target.value === '' ? '' : Number(e.target.value)
                }))
              }
            />
          </Field>
        </Row>
        <div
          style={{
            marginTop: 10,
            display: 'flex',
            justifyContent: 'space-between',
            gap: 10,
            flexWrap: 'wrap'
          }}
        >
          <div>
            {currentGrade != null ? (
              <div style={{ fontWeight: 900 }}>
                Current grade (based on completed work):{' '}
                <span style={{ color: '#a9ffdd' }}>
                  {currentGrade.toFixed(2)}%
                </span>
              </div>
            ) : (
              <Small>
                Add assignments to at least one section to see your current grade.
              </Small>
            )}
            <Small>
              Empty sections are ignored in the current grade. Only categories with
              assignments are counted.
            </Small>
          </div>
          <div>
            <SmallButton type="button" onClick={deleteCourse}>
              Delete class
            </SmallButton>
          </div>
        </div>
      </Card>

      <Card>
        <h2 style={{ marginTop: 0, marginBottom: 10 }}>Class grade structure</h2>
        <Small>
          Set up your syllabus: how much are quizzes, exams, homework, and the final
          worth? Mark one section as your Final.
        </Small>
        <div
          style={{
            marginTop: 12,
            display: 'grid',
            gap: 10
          }}
        >
          {selectedCourse.sections.map(sec => (
            <Row key={sec.id} cols={4}>
              <Field>
                <Label>Section name</Label>
                <Input
                  value={sec.label}
                  onChange={e =>
                    updateCourse(c => ({
                      ...c,
                      sections: c.sections.map(s =>
                        s.id === sec.id ? { ...s, label: e.target.value } : s
                      )
                    }))
                  }
                />
              </Field>
              <Field>
                <Label>Weight (%)</Label>
                <Input
                  type="number"
                  value={sec.weight}
                  onChange={e =>
                    updateCourse(c => ({
                      ...c,
                      sections: c.sections.map(s =>
                        s.id === sec.id
                          ? {
                              ...s,
                              weight:
                                e.target.value === ''
                                  ? ''
                                  : Number(e.target.value)
                            }
                          : s
                      )
                    }))
                  }
                />
              </Field>
              <Field>
                <Label>Average</Label>
                <div>
                  {(() => {
                    const avg = computeSectionAverage(sec);
                    return avg == null ? (
                      <Small>No assignments yet</Small>
                    ) : (
                      <span style={{ fontWeight: 900 }}>
                        {avg.toFixed(2)}%
                      </span>
                    );
                  })()}
                </div>
              </Field>
              <Field>
                <Label>Final?</Label>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <input
                    type="radio"
                    checked={!!sec.isFinal}
                    onChange={() =>
                      updateCourse(c => ({
                        ...c,
                        sections: c.sections.map(s => ({
                          ...s,
                          isFinal: s.id === sec.id
                        }))
                      }))
                    }
                  />
                  <Small>Mark this as the final exam category</Small>
                </div>
              </Field>
            </Row>
          ))}
        </div>
        <div
          style={{
            marginTop: 10,
            display: 'flex',
            justifyContent: 'space-between',
            gap: 10
          }}
        >
          <div>
            <Small>
              Total weight:{' '}
              {selectedCourse.sections
                .reduce((sum, s) => sum + (Number(s.weight) || 0), 0)
                .toFixed(2)}
              %
            </Small>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            <SmallButton
              type="button"
              onClick={() =>
                updateCourse(c => ({
                  ...c,
                  sections: [
                    ...c.sections,
                    {
                      id: `sec_${Date.now()}`,
                      label: 'New Section',
                      weight: 0,
                      isFinal: false,
                      assignments: []
                    }
                  ]
                }))
              }
            >
              + Add section
            </SmallButton>
          </div>
        </div>
      </Card>

      <Card>
        <h2 style={{ marginTop: 0, marginBottom: 10 }}>Assignments & scores</h2>
        <Small>
          Click into a section and log your quizzes, tests, projects, etc. You can also
          add "what if" scores to see how they change your grade.
        </Small>

        {selectedCourse.sections.map(sec => (
          <div
            key={sec.id}
            style={{
              marginTop: 16,
              paddingTop: 12,
              borderTop: '1px solid rgba(140,140,200,0.4)'
            }}
          >
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: 10,
                alignItems: 'center',
                marginBottom: 8
              }}
            >
              <div style={{ fontWeight: 900 }}>
                {sec.label}{' '}
                <Tag>
                  {sec.weight || 0}%{sec.isFinal ? ' • Final' : ''}
                </Tag>
              </div>
              <SmallButton
                type="button"
                onClick={() =>
                  updateCourse(c => ({
                    ...c,
                    sections: c.sections.map(s =>
                      s.id === sec.id
                        ? {
                            ...s,
                            assignments: [
                              ...s.assignments,
                              {
                                id: `a_${Date.now()}`,
                                label: `Assignment ${s.assignments.length + 1}`,
                                score: '',
                                outOf: ''
                              }
                            ]
                          }
                        : s
                    )
                  }))
                }
              >
                + Add assignment
              </SmallButton>
            </div>

            {sec.assignments.length === 0 ? (
              <Small>No assignments logged yet.</Small>
            ) : (
              <div style={{ display: 'grid', gap: 8 }}>
                {sec.assignments.map(a => (
                  <Row key={a.id} cols={4}>
                    <Field>
                      <Label>Label</Label>
                      <Input
                        value={a.label}
                        onChange={e =>
                          updateCourse(c => ({
                            ...c,
                            sections: c.sections.map(s =>
                              s.id === sec.id
                                ? {
                                    ...s,
                                    assignments: s.assignments.map(x =>
                                      x.id === a.id
                                        ? { ...x, label: e.target.value }
                                        : x
                                    )
                                  }
                                : s
                            )
                          }))
                        }
                      />
                    </Field>
                    <Field>
                      <Label>Score</Label>
                      <Input
                        type="number"
                        value={a.score}
                        onChange={e =>
                          updateCourse(c => ({
                            ...c,
                            sections: c.sections.map(s =>
                              s.id === sec.id
                                ? {
                                    ...s,
                                    assignments: s.assignments.map(x =>
                                      x.id === a.id
                                        ? {
                                            ...x,
                                            score:
                                              e.target.value === ''
                                                ? ''
                                                : Number(e.target.value)
                                          }
                                        : x
                                    )
                                  }
                                : s
                            )
                          }))
                        }
                      />
                    </Field>
                    <Field>
                      <Label>Out of</Label>
                      <Input
                        type="number"
                        value={a.outOf}
                        onChange={e =>
                          updateCourse(c => ({
                            ...c,
                            sections: c.sections.map(s =>
                              s.id === sec.id
                                ? {
                                    ...s,
                                    assignments: s.assignments.map(x =>
                                      x.id === a.id
                                        ? {
                                            ...x,
                                            outOf:
                                              e.target.value === ''
                                                ? ''
                                                : Number(e.target.value)
                                          }
                                        : x
                                    )
                                  }
                                : s
                            )
                          }))
                        }
                      />
                    </Field>
                    <Field>
                      <Label>&nbsp;</Label>
                      <div style={{ display: 'flex', gap: 6 }}>
                        <SmallButton
                          type="button"
                          onClick={() =>
                            updateCourse(c => ({
                              ...c,
                              sections: c.sections.map(s =>
                                s.id === sec.id
                                  ? {
                                      ...s,
                                      assignments: s.assignments.filter(
                                        x => x.id !== a.id
                                      )
                                    }
                                  : s
                              )
                            }))
                          }
                        >
                          Remove
                        </SmallButton>
                      </div>
                    </Field>
                  </Row>
                ))}
              </div>
            )}
          </div>
        ))}
      </Card>

      <Card>
        <h2 style={{ marginTop: 0, marginBottom: 10 }}>What do I need on the final?</h2>
        {neededFinal == null ? (
          <Small>
            Set a target grade, mark one section as Final, make sure your weights add to
            ~100%, and add scores to the other sections.
          </Small>
        ) : neededFinal.invalidWeights ? (
          <Small>
            Your section weights don&apos;t add up to 100%. Adjust them to use this
            calculator.
          </Small>
        ) : (
          <>
            <div style={{ fontWeight: 900, fontSize: 18 }}>
              To end with{' '}
              <span style={{ color: '#ffd26a' }}>
                {Number(selectedCourse.target).toFixed(1)}%
              </span>{' '}
              overall, you need about{' '}
              <span style={{ color: '#ffd26a' }}>
                {neededFinal.needed.toFixed(2)}%
              </span>{' '}
              in your Final section.
            </div>
            {neededFinal.needed > 100 && (
              <Small>
                This is above 100%. It may not be possible to reach your target grade
                with the current scores.
              </Small>
            )}
            {neededFinal.needed < 0 && (
              <Small>
                Your existing scores are strong enough that you could score 0 on the
                Final and still reach your target.
              </Small>
            )}
          </>
        )}
      </Card>
    </>
  );
}

/* =============== Page Component =============== */

export default function GradePlannerPage() {
  const [tab, setTab] = useState('quick');

  return (
    <Shell>
      <Main>
        <Tabs>
          <TabBtn
            type="button"
            active={tab === 'quick'}
            onClick={() => setTab('quick')}
          >
            Quick final calculator
          </TabBtn>
          <TabBtn
            type="button"
            active={tab === 'planner'}
            onClick={() => setTab('planner')}
          >
            Full class planner
          </TabBtn>
        </Tabs>

        {tab === 'quick' ? (
          <>
            <QuickFinalCard />
            <Card>
              <Small>
                Want full control? Switch to the{' '}
                <span style={{ fontWeight: 800 }}>Full class planner</span> tab to build
                a syllabus-style grade breakdown (quizzes, midterms, homework, final)
                and log each score (13/15, 42/50, etc.).
              </Small>
            </Card>
          </>
        ) : (
          <PlannerCard />
        )}

        {/* SEO / explanation content */}
        <Card>
          <h2 style={{ marginTop: 0 }}>How Final Grade Calculations Work</h2>
          <p>
            Most classes use weighted grading, which means each category—such as quizzes,
            homework, midterms, and the final exam—counts for a different percentage of
            your overall grade. Your current grade is based on all completed categories,
            and the final exam fills in the remaining percentage of the course.
          </p>

          <h3>Final Exam Formula</h3>
          <p>To calculate what you need on your final, use this formula:</p>

          <pre
            style={{
              background: 'rgba(255,255,255,0.05)',
              padding: '12px',
              borderRadius: '8px',
              overflowX: 'auto',
              fontSize: '14px',
              whiteSpace: 'pre-wrap'
            }}
          >
{`Required Final Score =
(Target Grade – Current Grade × (1 – Final Weight)) ÷ Final Weight`}
          </pre>

          <p>
            For example, if you have an <strong>87%</strong> in the class, your final
            exam is worth <strong>30%</strong>, and you want a{' '}
            <strong>90%</strong> overall, this calculator uses that formula to compute
            the exact score you need on the final to hit your target grade.
          </p>

          <h3>Weighted Category Example</h3>
          <p>
            Suppose quizzes are worth 15%, homework is 20%, a midterm is 25%, and the
            final exam is 40%. Your overall grade is determined by the average in each
            category multiplied by its weight. The Full Class Planner on this site lets
            you enter assignments for each category so you can see your real-time grade
            and experiment with “what if” scores.
          </p>

          <h3>Common Questions</h3>
          <ul>
            <li>
              <strong>“What do I need on my final to get an A?”</strong> — Use the Quick
              Final Calculator with your current grade, final weight, and target grade.
            </li>
            <li>
              <strong>“Can I see how each quiz or assignment affects my grade?”</strong>{' '}
              — Yes, the Class Planner recalculates your grade every time you add or
              edit an assignment.
            </li>
            <li>
              <strong>“What if my weights don’t add to 100%?”</strong> — The planner
              shows the total weight and warns you when the numbers don’t line up with a
              valid syllabus.
            </li>
          </ul>

          <p>
            Use this tool throughout the semester to monitor your progress, stay on top
            of each category, and make sure you know exactly what you need on your final
            exam to reach your goal grade.
          </p>
        </Card>
      </Main>
    </Shell>
  );
}
