import Image from 'next/image';
import PreviewModalContainer from '../../components/ui/preview-modal-container';
import { BaseButton } from '../../components/ui/base-button';

type Props = {
  project?: any;
  open: boolean;
  close: () => void;
  images: (string | undefined)[];
};

export function PreviewArtLarge({ open, close, images }: Props) {
  return (
    <PreviewModalContainer
      header={{
        title: 'Artwork preview',
        description: 'Accept or edit text prompt to regenerate.'
      }}
      openModal={open}
      closeModal={close}
    >
      <div className="flex w-full flex-col items-center gap-[62px]">
        <div className="flex w-full flex-wrap justify-center gap-4">
          {images.length > 1
            ? images.map(url => {
                if (url) {
                  return (
                    <div key={url} className="grid grid-cols-2 items-center gap-[26px]">
                      <Image
                        key={url}
                        src={url}
                        alt=""
                        width={382}
                        height={392}
                        priority
                      />
                      {/* <BaseButton onClick={close}>Regenerate V1</BaseButton> */}
                    </div>
                  );
                }
              })
            : images.map(url => {
                if (url) {
                  return (
                    <div key={url} className="grid grid-cols-4 items-center gap-[26px]">
                      <Image
                        key={url}
                        src={url}
                        alt=""
                        width={161}
                        height={161}
                        priority
                      />
                      {/* <BaseButton onClick={close}>Regenerate V1</BaseButton> */}
                    </div>
                  );
                }
                //     })}
                // {images.map(url => {
                //   if (url) {
                //     return (
                //       <div key={url} className="grid grid-cols-2 items-center gap-[26px]">
                //         <Image key={url} src={url} alt="" width={161} height={161} priority />
                //         <BaseButton onClick={close}>Regenerate V1</BaseButton>
                //       </div>
                //     );
                //   }
              })}
        </div>
      </div>
    </PreviewModalContainer>
  );
}
