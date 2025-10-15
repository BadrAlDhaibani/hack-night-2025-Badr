import styled from 'styled-components';

export const MenuContainer = styled.div`
  position: relative;
  z-index: 1000;
`;

export const MenuButton = styled.button`
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.3s ease;
  padding: 0;

  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }

  &:hover span {
    transform: rotate(90deg);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.3);
  }
`;

export const MenuIcon = styled.span`
  font-size: 1.25rem;
  color: white;
  user-select: none;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  line-height: 1;

  svg {
    width: 1.25rem;
    height: 1.25rem;
    color: white;
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  top: calc(100% + 0.5rem);
  right: 0;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 0.75rem;
  padding: 1.25rem;
  min-width: 16rem;
  animation: slideDown 0.2s ease-out;

  @keyframes slideDown {
    from {
      opacity: 0;
      transform: translateY(-0.5rem);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const DropdownSection = styled.div`
  margin-bottom: 1rem;

  &:last-of-type {
    margin-bottom: 0.75rem;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 0.875rem;
  font-weight: 600;
  color: white;
  margin: 0 0 0.5rem 0;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-shadow: 0.0625em 0.0625em 0.25em rgba(0, 0, 0, 0.3);
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.5rem 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-family: inherit;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  transition: all 0.2s ease;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: rgba(255, 255, 255, 0.5);
    background: rgba(255, 255, 255, 0.25);
  }

  &::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: white;
  cursor: pointer;
  user-select: none;
  transition: opacity 0.2s ease;
  text-shadow: 0.0625em 0.0625em 0.25em rgba(0, 0, 0, 0.3);

  &:hover {
    opacity: 0.8;
  }
`;

export const RadioInput = styled.input`
  margin-right: 0.5rem;
  cursor: pointer;
  width: 1rem;
  height: 1rem;
  accent-color: white;
`;

export const ApplyButton = styled.button`
  width: 100%;
  padding: 0.625rem;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: inherit;
  text-shadow: 0.0625em 0.0625em 0.25em rgba(0, 0, 0, 0.3);

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    border-color: rgba(255, 255, 255, 0.4);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.4);
  }
`;
