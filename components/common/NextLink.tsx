import '@/styles/components/common/NextLink.css';
import { useT } from '@/hooks/useT';
import TransitionLink from '@/components/common/TransitionLink';
import {FaArrowRightLong} from "react-icons/fa6";

interface NextLinkProps {
  pathname?: string;
  labelKey?: string;
}

const NextLink = ({ 
  pathname = "/about",
  labelKey = "home.next-button"
}: NextLinkProps) => {
  const { t } = useT();

  return (
    <TransitionLink href={pathname} data-cursor="pointer">
        <div className="next-link">
            <span className="text">{t(labelKey)}</span>

            <FaArrowRightLong className="icon" size={20}/>
        </div>
    </TransitionLink>
  );
};

export default NextLink;